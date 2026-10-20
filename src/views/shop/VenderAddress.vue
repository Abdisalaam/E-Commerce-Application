<template>
  <ka-address-manage :common-service="CommonServices" :shop-service="ShopService" :mapKey="mapKey" :default-address="defaultAddress"></ka-address-manage>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { ShopDomain, CommonDomain } from "../../service/index";

  @Component({})
  export default class ShopInfo extends Vue {
    private readonly ShopService = ShopDomain;
    private readonly CommonServices = CommonDomain;
    private readonly mapKey = Vue.prototype.$globalConfig.mapKey;
    private readonly defaultAddress = JSON.parse(decodeURIComponent(Vue.prototype.$globalConfig.DEFAULT_ADDRESS_EN));
}
</script>
