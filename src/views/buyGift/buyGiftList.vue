<template>
  <div>
    <ka-buy-gift-list
      :buy-gift-service="buyGiftService"
      :common-service="CommonService"
      :no-login-page="noLoginPage"
      @onAdd="onAdd"
      @on-create="handleCreateActivity"
      @on-view="handleViewActivity"
    ></ka-buy-gift-list>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { buyGiftDomain, CommonDomain } from "@/service";
import { ActivityBaseVo } from "@Abdisalaam/b2c-be-buygift-sdk-i18n/lib/vos/ActivityBaseVo";
import { getEnvConfig } from "@/constants/envConfig";

@Component
export default class DemoBuyGiftList extends Vue {
  private buyGiftService = buyGiftDomain;
  private CommonService = CommonDomain;
  private noLoginPage = getEnvConfig().LOGIN_URL + location.href;


  private onAdd() {
    this.$router.push(`/buyGift/create`);
  }
  handleCreateActivity(activity: ActivityBaseVo) {
    if (activity) {
      this.$router.push(`/buyGift/create?id=${activity?.id}`);
    } else {
      this.$router.push(`/buyGift/create`);
    }
  }

  handleViewActivity(activity: ActivityBaseVo) {
    this.$router.push(`/buyGift/detail?id=${activity?.id}`);
  }
}
</script>
