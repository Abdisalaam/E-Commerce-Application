<template>
  <ka-service-plugin-manage
   :service="pluginDomain"
   :product-service="productDomain"
   :order-service="orderDomain"
   :imgDomains="imgDomains"
   :outerSecondaryDomain="outerSecondaryDomain"
    @_toGoodsDetail="_toGoodsDetail"
    @_toOrderList="_toOrderList"
    @_toOrderDetail="_toOrderDetail"
  >
  </ka-service-plugin-manage>

</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import { getEnvConfig } from "@/constants/envConfig";
import {CustomerServicePluginDomain,OrderDomain,ProductDomain} from "@/service";
import { toSkuDetail } from "@/constants/busi/BusiConstants";

@Component
export default class CustomerServicePlugin extends Vue {
  private pluginDomain = CustomerServicePluginDomain;
  private orderDomain = OrderDomain;
  private productDomain = ProductDomain;
  private imgDomains = getEnvConfig().IMAGE_DOMAINS;
  private outerSecondaryDomain = Vue.prototype.$globalConfig.outerSecondaryDomain

   // 跳转商详
  private _toGoodsDetail(skuId: string) {
    skuId && toSkuDetail(skuId);
  }

  // 跳转订单列表
  private _toOrderList() {
    setTimeout(() => {
      window.open(`${Vue.prototype.$globalConfig.staticUrl}/orderList`)
    })
  }

   //跳转订单详情
  private _toOrderDetail(data: any){
    data && data.orderId && window.open(`${Vue.prototype.$globalConfig.staticUrl}/orderDetail/${data.orderId}`);
  }
}
</script>
