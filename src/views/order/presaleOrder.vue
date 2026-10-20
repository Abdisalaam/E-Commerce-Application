<template>
  <ka-presale-order
      :imgDomains="imgDomains"
      :service="OrderService"
      @onDetail="_detail"
      @onGoodsDetail="_goodsDetail"
  ></ka-presale-order>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import {getEnvConfig} from "../../constants/envConfig";
import {OrderDomain} from "../../service";
import {toSkuDetail} from "@/constants/busi/BusiConstants";

@Component
export default class DemoKaPresaleList extends Vue {
  private readonly OrderService = OrderDomain;
  private imgDomains = getEnvConfig().IMAGE_DOMAINS;
  private _detail(orderId: string) {
    this.$router.push(`/orderDetail/${orderId}`);
  }

  _goodsDetail(skuId: string) {
    toSkuDetail(skuId);
  }
}
</script>
