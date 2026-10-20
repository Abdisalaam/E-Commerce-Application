<template>
  <div>
    <ka-b-settlement-list
      :SettlementService="SettlementServiceDomain"
      @to-export-history="handleToExportHistory"
      @gotoSettlementDetail="gotoSettlementDetail"
      @gotoSettlementItemDetail="gotoSettlementItemDetail"
    ></ka-b-settlement-list>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { SettlementServiceDomain } from "@/service";
import { ROUTES } from "@/router/index";

@Component
export default class SettlementList extends Vue {
  SettlementServiceDomain = SettlementServiceDomain;
  // 导出历史
  handleToExportHistory() {
    this.$router.push({
      path: ROUTES.TASK_CENTER.path,
    });
  }
  // 跳转至结算单
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
