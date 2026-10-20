<template>
  <div>
    <!-- <h1>B端</h1> -->
    <ka-warranty-details
      :SettlementService="SettlementService"
      :hideColumns="hideColumns"
      :isSearchForm="false">
    </ka-warranty-details>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { InnerSettlementServiceDomain } from "../../../service";

@Component
export default class DemoWarrantyDetails extends Vue {
  SettlementService = InnerSettlementServiceDomain;
  hideColumns = ["venderId", "companyName", "companyId"];
}
</script>
