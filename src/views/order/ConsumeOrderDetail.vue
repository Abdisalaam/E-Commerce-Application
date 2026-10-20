<template>
  <div class="ka-consume-order-detail-contener">
    <div class="detail-page-title">{{i18n.t('order.WriteOffDetailsTitle')}}</div>
    <ka-consume-order-detail
      :order-id="innerOrderId"
      :service="orderDomain"
      :imgDomains="imgDomains"
    ></ka-consume-order-detail>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { OrderDomain } from "@/service";
import { getEnvConfig } from "@/constants/envConfig";
import i18n from "@/lang/i18n";

@Component
export default class OrderDetail extends Vue {
  private i18n = i18n;
  private orderDomain = OrderDomain;
  private imgDomains = getEnvConfig().IMAGE_DOMAINS;
  private innerOrderId = "";

  mounted() {
    this.innerOrderId = String(this.$route.params.orderId);
  }
}
</script>

<style lang="less" scoped>
.ka-consume-order-detail-contener {
  .detail-page-title {
    color: var(--rcd-color-text-400);
    font-weight: var(--rcd-font-weight-medium);
    font-size: var(--rcd-font-size-20x);
    line-height: var(--rcd-line-height-30);
    margin-bottom: 16px;
  }
}
</style>
