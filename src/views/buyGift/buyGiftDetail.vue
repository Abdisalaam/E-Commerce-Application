<template>
  <div>
    <ka-buy-gift-detail
      :buy-gift-service="buyGiftService"
      :imageDomain="IMAGE_DOMAINS"
    ></ka-buy-gift-detail>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { buyGiftDomain, CommonDomain } from "@/service";
import { getEnvConfig } from "@/constants/envConfig";


@Component
export default class DemoBuyGiftDetail extends Vue {
   private IMAGE_DOMAINS = getEnvConfig().IMAGE_DOMAINS;
  private buyGiftService = buyGiftDomain;
  private CommonService = CommonDomain;
}
</script>
