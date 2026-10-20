<template>
  <div>
    <ka-warehouse-address-manage
      :commonService="CommonDomain"
      :service="StockService"
      :isSelfSale="isSelfSale"
      :blackList="[]"
    ></ka-warehouse-address-manage>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {WareStockDomain, CommonDomain} from "@/service";

@Component
export default class WarehouseAddressManage extends Vue {
  private StockService = WareStockDomain;
  private CommonDomain = CommonDomain;
  // 是否自营
  get isSelfSale() {
    return !!Vue.prototype.$globalConfig?.venderInfo?.isSelfSale
  }
}
</script>
