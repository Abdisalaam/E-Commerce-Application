<template>
  <div class="page-container-wraper">
    <!-- <div class="page-title">
      <h3>开票审核</h3>
    </div> -->
    <ka-ka-receipt-audit
      :invoice-service="InvoiceService"
      @goToDetail="handlePageJump"
    ></ka-ka-receipt-audit>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { InvoiceDomain } from "@/service/index";
import { ROUTES } from "@/router/index";

@Component
export default class DemoKaReceiptAudit extends Vue {
  private InvoiceService = InvoiceDomain;

  private handlePageJump(id: any) {
    this.$router.push({
      path: ROUTES.INVOICE_DETAIL.path,
      query: {
        applyId: id
      }
    });
  }
}
</script>
