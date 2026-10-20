import Component from "vue-class-component";
import {Mixins, Vue} from "vue-property-decorator";
import {CommonDomain, MediaDomain, ProductDomain} from "@/service";
import {getEnvConfig} from "@/constants/envConfig";
import {getKaConfig} from "@/kaConfig";
import {IExtFormSettings} from "@Abdisalaam/b2c-be-product-ui-i18n/packages/pagesComponents/warePublish/types";
import {ROUTES} from "@/router";
import {AddProductVo} from "@Abdisalaam/b2c-be-product-sdk-i18n/lib/vos/returns/AddProductVo";
import {CHANGE_PRODUCT_STATUS_ACTION, PRODUCT_STATUS} from "@/constants/busi/BusiConstants";

@Component
export class PublishMixin extends Mixins() {
  public productDomain = ProductDomain;
  public mediaDomain = MediaDomain;
  public commonDomain = CommonDomain;
  public productId = "";
  public imageDomains = getEnvConfig().IMAGE_DOMAINS
  public isCopy = false;
  // 是否支持VOP商品
  public supportVop = getKaConfig().product.supportVop;
  // 是否支持loc商品
  public supportLoc = true;
  // 是否校验运费模板必填
  public requireShippingTmp = true;
  // 是否强制图文描述为https
  public forceHttpsImg = !!Vue.prototype.$globalConfig?.forceHttpsImg;
  // 表单扩展
  public extFormSettings: IExtFormSettings = {
    extVisibleSettings: {
      deliveryType: true,
      unavailableIntegral: true,
      isNoSingleBuy: false,
      skuShowSetStock: false
    }
  }
  // 事件扩展
  public actions: any = {
    addProductSuccessCallBack: this.handleAddSuccess,
    updateProductSuccessCallBack: this.handleUpdateSuccess,
    toImageZone: this.toImageZonePage,
    toShopCategory: this.toShopCategory,
    toShippingTmp: this.toShippingTmp,
    toAddLocGroup: this.toAddLocGroup,
    onCancel: this.toProductList,
    saveDraftSuccessCallBack: this.toProductDraftList,
  }

  // 是否自营
  get isSelfSale() {
    return !!Vue.prototype.$globalConfig?.venderInfo?.isSelfSale
  }

  get isEdit () {
    return !!(this.productId && this.productId.length > 0);
  }

  get title () {
    if (this.isCopy) {
      return (this as any).$t("product.copyProduct");
    }
    if (this.isEdit) {
      return (this as any).$t("product.editProduct");
    }
    return (this as any).$t("product.addProduct");
  }

  // 取消方法，默认返回上一页，上架和下架路由分别重写覆盖该方法
  toProductList() {
    this.$router.go(-1);
  }

  // 到店内分类
  toShopCategory() {
    const routeData = this.$router.resolve({path: ROUTES.SHOP_CATEGORY.path});
    window.open(routeData.href, "_blank");
  }

  // 到运费模板
  toShippingTmp() {
    const routeData = this.$router.resolve({path: ROUTES.SHIPPING_TEMPLATE.path});
    window.open(routeData.href, "_blank");
  }

  toAddLocGroup() {
    const routeData = this.$router.resolve({path: ROUTES.STORE_GROUP_MANAGE.path});
    window.open(routeData.href, "_blank");
  }

  created () {
    const {productId, isCopy} = this.$route.query;
    if (productId) {
      this.productId = productId as string;
    }
    if (isCopy) {
      this.isCopy = true;
    }
  }

  // 编辑商品：
  // 从下架状态发布到待售或在售，固定跳到待售列表
  // 从上架状态发布到待售，固定跳到待售
  // 从上架状态发布到在售，固定跳到在售
  handleUpdateSuccess (params: AddProductVo) {
    if(String(params?.productStatus) === String(PRODUCT_STATUS.ON_SHELF)) {
      if (params && String(params?.productOperate) === String(CHANGE_PRODUCT_STATUS_ACTION.ON_SHELF)) {
        this.$router.push({path: ROUTES.ON_SHELF_WARE.path});
      } else {
        this.$router.push({path: ROUTES.OFF_SHELF_WARE.path});
      }
    } else {
      this.$router.push({path: ROUTES.OFF_SHELF_WARE.path});
    }
  }

  // 新增商品，因为需要审核，固定跳到待售列表
  handleAddSuccess() {
    this.$router.push({path: ROUTES.OFF_SHELF_WARE.path});
  }

  // 待售商品列表
  toOffShelfList() {
    this.$router.push({path: ROUTES.OFF_SHELF_WARE.path});
  }

  toImageZonePage () {
    const routeData = this.$router.resolve({path: ROUTES.IMG_ZONE.path});
    window.open(routeData.href, "_blank");
  }

  toProductDraftList() {
    this.$router.push({
      path: ROUTES.PRODUCT_DRAFT_PAGE.path
    })
  }
}
