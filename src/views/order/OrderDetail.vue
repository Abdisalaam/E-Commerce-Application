<template>
  <div class="ka-order-detail-container">
    <div class="edit-page-title">{{i18n.t('order.OrderDetailTitle')}}</div>
    <ka-order-detail :order-id="innerOrderId"
                     :service="orderDomain"
                     :imgDomains="imgDomains"
                     @onJdiDetail="onJdiDetail"
                     @toWarehousePage="toWarehousePage"
                     :isDiscountPrice="true"
                     :isShowSupplierInfo="isShowSupplierInfo" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { OrderDomain } from "@/service";
import { getEnvConfig } from "@/constants/envConfig";
import i18n from "@/lang/i18n";
import {ROUTES} from "@/router";
import {GetOrderDetailVo} from "@Abdisalaam/b2c-be-order-sdk-i18n/lib/vos/orderDetail/GetOrderDetailVo";

@Component
export default class OrderDetail extends Vue {
  private i18n = i18n;
  private orderDomain = OrderDomain;
  private imgDomains = getEnvConfig().IMAGE_DOMAINS;
  private innerOrderId = "";
  //是否展示供品方信息
  private isShowSupplierInfo = true;

  mounted() {
    this.innerOrderId = String(this.$route.params.orderId);
  }

  // 跳JDI订单详情
  private onJdiDetail(orderVo: GetOrderDetailVo) {
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

<style lang="less" scoped>
.ka-order-detail-container {
  .edit-page-title {
    color: var(--rcd-color-text-400);
    font-weight: var(--rcd-font-weight-medium);
    font-size: var(--rcd-font-size-20x);
    line-height: var(--rcd-line-height-30);
    margin-bottom: 16px;
  }
}
</style>
