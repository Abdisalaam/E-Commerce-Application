<template>
  <div>
    <ka-jdi-order-detail :order-id="innerOrderId"
                         :site-type="siteType"
                         @onOrderDetail="onOrderDetail"
                         :service="orderDomain"></ka-jdi-order-detail>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { OrderDomain } from "@/service";
import {SITE_TYPE} from "@/constants/busi/BusiConstants";

@Component
export default class OrderDetail extends Vue {
  private orderDomain = OrderDomain;
  private innerOrderId = "";
  private siteType = SITE_TYPE.B;

  mounted() {
    const {orderId} = this.$route.query;
    if (orderId && Number(orderId) > 0) {
      this.innerOrderId = String(orderId);
    }
  }

  onOrderDetail(orderId: string) {
    this.$router.push(`/orderDetail/${orderId}`);
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
