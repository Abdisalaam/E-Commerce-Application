import Component from "vue-class-component";
import {Mixins, Vue} from "vue-property-decorator";
import {ProductDomain, CommonDomain, StockDomain} from "@/service";
import {getEnvConfig} from "@/constants/envConfig";
import {
  IExtFiltersSettings,
  PAGE_TYPE_ENUM
} from "@Abdisalaam/b2c-be-product-ui-i18n/packages/pagesComponents/wareManage/types/types"
import {ROUTES} from "@/router";
import {ListProductVo} from "@Abdisalaam/b2c-be-product-sdk-i18n/lib/vos/returns/ListProductVo";
import {ListSkuVo} from "@Abdisalaam/b2c-be-product-sdk-i18n/lib/vos/returns/ListSkuVo";
import { toSkuDetail } from '@/constants/busi/BusiConstants';

@Component
export class ProductManageMixin extends Mixins() {
  public productDomain = ProductDomain;
  public commonDomain = CommonDomain;
  public imageDomains = getEnvConfig().IMAGE_DOMAINS
  public readonly PAGE_TYPE_ENUM = PAGE_TYPE_ENUM;
  public stockDomain = StockDomain;
  public readonly MAX_EXPORT_NUM = 30000;

  public actions: any = {
    onAddProduct: this.toAddPage,
    onEditProduct: this.toEditPage,
    onViewExportHistoryClick: this.toExportHistory,
    onCopyProduct: this.toCopyPage,
    toSkuDetail: this.toSkuDetail,
    toSpuDetail: this.toSpuDetail,
    toTaskPage: this.toTaskPage,
    // 到达店内分类
    toShopCategory: this.toShopCategory,
    // 到达运费模板
    toShippingTemplate: this.toShippingTmp
  }

  // 验证扩展筛选项、替换筛选项功能
  public extFilters: IExtFiltersSettings = {
    extSearchItems: [
      {
        props: "productSource",
        hide: true  // 说明要去掉该筛选项
      }
    ],
  }

  // 是否自营
  get isSelfSale() {
    return !!Vue.prototype.$globalConfig?.venderInfo?.isSelfSale
  }

  // 在售-新增页
  public toAddPage() {
    this.$router.push({path: ROUTES.ON_SHELF_WARE_ADD.path});
  }

  // 在售-编辑页
  public toEditPage(productId: string) {
    this.$router.push({path: ROUTES.ON_SHELF_WARE_EDIT.path + "?productId=" + productId});
  }

  // 到店内分类
  public toShopCategory() {
    const routeData = this.$router.resolve({path: ROUTES.SHOP_CATEGORY.path});
    setTimeout(() => {
      window.open(routeData.href, "_blank");
    })
  }

  // 到运费模板
  public toShippingTmp() {
    const routeData = this.$router.resolve({path: ROUTES.SHIPPING_TEMPLATE.path});
    setTimeout(() => {
      window.open(routeData.href, "_blank");
    })
  }

  public toExportHistory() {
    const routeData = this.$router.resolve({path: ROUTES.TASK_CENTER.path});
    setTimeout(() => {
      window.open(routeData.href, "_blank");
    })
  }

  // 在售-复制页
  public toCopyPage (productId: string) {
    if (productId) {
      this.$router.push({
        path: ROUTES.ON_SHELF_WARE_ADD.path,
        query: {
          productId: productId,
          isCopy: "1" // 传大于0的数即可
        }
      });
    }
  }

  public toSpuDetail (row: ListProductVo) {
    if (row && row.skuVos && row.skuVos.length > 0) {
      const skuId = row.skuVos[0].skuId;
      skuId && toSkuDetail(skuId)
    }
  }

  // 跳转到SKU详情
  public toSkuDetail (row: ListSkuVo) {
    row?.skuId && toSkuDetail(row.skuId);
  }

  // 跳转任务中心
  public toTaskPage() {
    const routeData = this.$router.resolve({path: ROUTES.TASK_CENTER.path});
    setTimeout(() => {
      window.open(routeData.href, "_blank");
    })
  }
}
