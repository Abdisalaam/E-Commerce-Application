<template>
  <div>
    <ka-b-settlement-query
      :settlement-service="SettlementServiceDomain"
      @to-export-history="handleToExportHistory"
      @go-to-SettlementDetail="gotoSettlementDetail"
      @gotoSettlementItemDetail="gotoSettlementItemDetail"
    ></ka-b-settlement-query>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { SettlementServiceDomain } from "@/service";
import { ROUTES } from "@/router/index";

@Component
export default class SettlementQuery extends Vue {
  SettlementServiceDomain = SettlementServiceDomain;
  // 导出历史
  handleToExportHistory() {
    this.$router.push({
      path: ROUTES.TASK_CENTER.path,
    });
  }
  // 查看结算单
  gotoSettlementDetail(val: any) {
    this.$router.push({
      path: ROUTES.SETTLEMENT_ITEM_DETAIL.path,
      query: {
        settlementId: val.settlementId,
      },
    });
  }
  // 跳转至结算单
  gotoSettlementItemDetail(val: any) {
    this.$router.push({
      path: ROUTES.SETTLEMENT_DETAIL.path,
      query: {
        settlementId: val.settlementId,
        excelUrl: val.excelUrl || "",
      },
    });
  }
}
</script>
