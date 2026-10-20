<template>
  <div>
    <div class="page-title">{{i18n.t('invoice.invoiceDetailTitle')}}</div>
    <ka-ka-receipt-detail
      :invoice-service="InvoiceService"
      :applyId="applyId"
      ref="InvoiceDetailRef"
      @onBackEvent="handlePageBack"
    ></ka-ka-receipt-detail>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { InvoiceDomain } from "@/service/index";
import { ROUTES } from "@/router/index";
import i18n from "@/lang/i18n";

@Component
export default class KaReceiptDetail extends Vue {
  private i18n = i18n;
  private InvoiceService = InvoiceDomain;
  private applyId: any = "";
  mounted() {
    const { applyId } = (this.$route.query as any) || {};
    this.applyId = [undefined, null].includes(applyId) ? "" : applyId;
    if (
      this.$refs.InvoiceDetailRef &&
      (this.$refs.InvoiceDetailRef as any).init
    ) {
      (this.$refs.InvoiceDetailRef as any).init(applyId);
    }
  }
  private handlePageBack() {
    this.$router.push({
      path: ROUTES.INVOICE_MANAGE.path,
    });
  }
}
</script>
<style scoped>
.page-title {
  margin-bottom: 16px;
  font-size: var(--rcd-font-size-20x);
  font-weight: var(--rcd-font-weight-medium);
  line-height: var(--rcd-line-height-30);
  color: var(--rcd-color-text-400);
}
</style>
