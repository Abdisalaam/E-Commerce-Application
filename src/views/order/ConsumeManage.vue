<template>
  <div class="ka-consume-order-container">
    <ka-store-consume
      :service="orderDomain"
      :imgDomains="imgDomains"
      @onDetail="_goDetail"
      @onHistory="_onHistory"
    ></ka-store-consume>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { OrderDomain } from "@/service";
import { getEnvConfig } from "@/constants/envConfig";
import {ROUTES} from "@/router";

@Component
export default class OrderDetail extends Vue {
  private orderDomain = OrderDomain;
  private imgDomains = getEnvConfig().IMAGE_DOMAINS;

  private _goDetail(orderId: string) {
    this.$router.push({path: `/consumeOrderDetail/${orderId}`});
  }

  // 跳转导出历史
  private _onHistory() {
    this.$router.push(`${ROUTES.TASK_CENTER.path}`);
  }
}
</script>

<style lang="less" scoped>
.ka-consume-order-container {
  .consume-page-title {
    color: var(--rcd-color-text-400);
    font-weight: var(--rcd-font-weight-medium);
    font-size: var(--rcd-font-size-20x);
    line-height: var(--rcd-line-height-30);
    margin-bottom: 16px;
  }
}
</style>
