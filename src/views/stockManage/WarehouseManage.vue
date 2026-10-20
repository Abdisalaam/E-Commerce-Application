<template>
  <div>
    <ka-warehouse-manage
      :service="StockDomain"
      :commonService="CommonDomain"
      :isSelfSale="isSelfSale"
      :blackList="[]"
      :mapKey="mapKey"
      :default-address="defaultAddress"
    >
    <!-- '810000', '820000' -->
    </ka-warehouse-manage>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { StockDomain } from "@/service";
import { CommonDomain } from "@/service";

@Component
export default class WarehouseManage extends Vue {
  private StockDomain = StockDomain;
  private CommonDomain = CommonDomain;
  private readonly mapKey = Vue.prototype.$globalConfig.mapKey;
  private readonly defaultAddress = JSON.parse(decodeURIComponent(Vue.prototype.$globalConfig.DEFAULT_ADDRESS_EN));
 // 是否自营
  get isSelfSale() {
    return !!Vue.prototype.$globalConfig?.venderInfo?.isSelfSale
  }
}
</script>
