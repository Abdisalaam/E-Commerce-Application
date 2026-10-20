<template>
  <div>
    <ka-b-settlement-item-detail
      :settlement-service="SettlementServiceDomain"
    ></ka-b-settlement-item-detail>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { SettlementServiceDomain } from "@/service";
@Component
export default class SettlementItemDetail extends Vue {
  SettlementServiceDomain = SettlementServiceDomain;
}
</script>
