<template>
  <ka-order-list :ref="PAGE_REF"
                 :service="orderDomain"
                 :imgDomains="imgDomains"
                 :showAwaitOrderDelivery="showAwaitOrderDelivery"
                 :extDeliveryType="extDeliveryType"
                 @onDetail="_onDetail"
                 @onJdiDetail="onJdiDetail"
                 @onChatWithBuyer="chatWithBuyer"
                 @onHistory="_onHistory"
                 @_toAfsDetail="_toAfsDetail"
                 :supportLoc="true"
                 @_toGoodsDetail="_toGoodsDetail"
                 @toWarehousePage="toWarehousePage"
                 :showVop="true"
                 :showDimension="true"
                 :showOrderEnum="showOrderEnum"
                 :isSupplierAccount="isSupplierAccount"
                 :isShowSupplierInfo="isShowSupplierInfo"
                 :batchImportParams="batchImportParams">
  </ka-order-list>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {CommonDomain, OrderDomain, TaskDomain} from "@/service";
import {getEnvConfig} from "@/constants/envConfig";
import {OrderVo} from "@Abdisalaam/b2c-be-order-sdk-i18n/lib/vos/orderManage/orderList/OrderVo";
import {TASK_B2C_B_DOMAIN_NO, TASK_B2C_B_SCENE_NO, toChatWithBuyer, toSkuDetail} from "@/constants/busi/BusiConstants";
import {ROUTES} from "@/router";
import i18n from "@/lang/i18n";
import {ORDER_TYPE} from "@Abdisalaam/b2c-be-order-sdk-i18n/lib/enums/OrderEnum";
import {TemplateFileRstVo} from "@Abdisalaam/b2c-be-task-sdk-i18n/lib/vos/TemplateFileRstVo";


@Component
export default class OrderList extends Vue {
  //是否是供品方
  private isSupplierAccount = false;
  //是否展示供品方信息
  private isShowSupplierInfo = true;
  // 导入模板下载地址
  private importTempDownLoadUrl = '';

  // data
  private orderDomain = OrderDomain;
  private imgDomains = getEnvConfig().IMAGE_DOMAINS;
  private showAwaitOrderDelivery =
    Vue.prototype.$globalConfig.showAwaitOrderDelivery;
  private readonly i18n = i18n;
  private PAGE_REF = "KaOrderList";
  private showOrderEnum = {
    showOrderType: [
      ORDER_TYPE.ALL,
      // ORDER_TYPE.VOP,
      ORDER_TYPE.LOC,
      // ORDER_TYPE.UNIBUY,
      ORDER_TYPE.GROUP,
      ORDER_TYPE.PRESALE,
      ORDER_TYPE.TPS,
      ORDER_TYPE.ZYC,
    ],
  };
  private extDeliveryType = {};

  // 批量导入发货配置信息
  get batchImportParams () {
    return {
      uploadUrl: CommonDomain.URLS().FILE_UPLOAD,
      ossUrl: "",
      bucketName: "",
      // 说明: 换成标品url路径
      templateUrl: this.importTempDownLoadUrl
    }
  }

  created() {
    this.initImportTempDownloadUrl();
    this.getSupplierInfo();
  }

  // 获取导入模板地址
  private initImportTempDownloadUrl() {
    TaskDomain.getImportTempUrl({
      domainNo: TASK_B2C_B_DOMAIN_NO.ORDER,
      sceneNo: TASK_B2C_B_SCENE_NO.ORDER_IMPORT_BATCH_SHIPPING
    }).then((res: TemplateFileRstVo) => {
        this.importTempDownLoadUrl = res?.templateFilePath || `${Vue.prototype.$globalConfig?.ossResources}Bulk_Import_Template.xlsx` || '';
    }).catch(() => {
      this.importTempDownLoadUrl = `${Vue.prototype.$globalConfig?.ossResources}Bulk_Import_Template.xlsx` || ''
    });
  }

  // 查询供品方信息
  private getSupplierInfo() {
    this.orderDomain
      .checkIsSupplier()
      .then((res: boolean) => {
        this.isSupplierAccount = res;
      })
      .catch((err: any) => {
        console.log(err.msg || `${this.i18n.t('order.supplierErr')}`);
      });
  }

  private _onDetail(orderId: string) {
    this.$router.push(`/orderDetail/${orderId}`);
  }

  private chatWithBuyer(orderVo: OrderVo) {
    toChatWithBuyer(
      Vue.prototype.$globalConfig.chatBuyerCAppId,
      orderVo?.userPin || "",
      orderVo?.venderId || ""
    );
  }

  private _toAfsDetail(orderVo: OrderVo) {
    this.$router.push(`${ROUTES.AFS_LIST.path}?orderId=${orderVo.orderId}`);
  }

  // 跳转商详
  private _toGoodsDetail(skuId: string) {
    skuId && toSkuDetail(skuId);
  }
  // 跳转导出历史
  private _onHistory() {
    this.$router.push(`${ROUTES.TASK_CENTER.path}`);
  }

  // 跳JDI订单详情
  private onJdiDetail(orderVo: OrderVo) {
    const {orderId} = orderVo || {};
    if (orderId) {
      this.$router.push(`${ROUTES.JDI_ORDER_DETAIL.path}?orderId=` + orderId);
    }
  }

  toWarehousePage() {
    const routeData = this.$router.resolve({path: ROUTES.WAREHOUSE_MANAGE_PAGE.path});
    setTimeout(() => {
      window.open(routeData.href, "_blank");
    })
  }
}
</script>
