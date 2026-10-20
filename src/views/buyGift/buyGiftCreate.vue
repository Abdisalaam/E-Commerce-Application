<template>
  <div>
    <ka-buy-giftcreaed
      :buy-gift-service="buyGiftService"
      :common-service="CommonService"
      :no-login-page="noLoginPage"
      :imageDomain="IMAGE_DOMAINS"
      @on-list="handleViewActivityList"
    ></ka-buy-giftcreaed>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { buyGiftDomain, CommonDomain } from "@/service";
import { getEnvConfig } from "@/constants/envConfig";

@Component
export default class BuyGiftCreate extends Vue {
  private IMAGE_DOMAINS = getEnvConfig().IMAGE_DOMAINS;
  private buyGiftService = buyGiftDomain;
  private CommonService = CommonDomain;
  private noLoginPage = getEnvConfig().LOGIN_URL + location.href;
  handleViewActivityList() {
    this.$router.push("/buyGift");
  }
}
</script>
