<template>
  <div>
    <ka-b-settlement-detail
      :SettlementService="SettlementServiceDomain"
      @gotoOrderDetail="gotoOrderDetail"
    ></ka-b-settlement-detail>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { SettlementServiceDomain } from "@/service";
import { ROUTES } from "@/router/index";
@Component
export default class SettlementDetail extends Vue {
  SettlementServiceDomain = SettlementServiceDomain;
  gotoOrderDetail(val: any) {
    console.log(1111);
    this.$router.push({
      name: ROUTES.ORDER_DETAIL.name,
      params: {
        orderId: val.orderId,
      },
    });
  }
}
</script>
