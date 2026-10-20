<template>
  <KaGroupDetails
    :ImageDomain="ImageDomain"
    @clickDeductionDetails="clickDeductionDetails"
    :GroupService="GroupService"
    :CommonService="CommonService"
    :template-domain="templateDomain"
    :activity-id="activityId"
    @goToTaskCenter="goToTaskCenter"
    :domain-no="domainNo"
    :scene-no="sceneNo"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { GroupDomain, CommonDomain } from "@/service";
import { getEnvConfig } from "@/constants/envConfig";
import { toDeductionDetails } from "@/constants/busi/BusiConstants";
import {ROUTES} from "@/router";
@Component
export default class DemoGroupCreate extends Vue {
  GroupService = GroupDomain;
  CommonService = CommonDomain;
  ImageDomain: any = getEnvConfig().IMAGE_DOMAINS;
  templateDomain = `${Vue.prototype.$globalConfig?.ossResources}SkuBulkExitTemplate.xlsx`;
  activityId: any = "";
  domainNo = "TD0000000055";
  sceneNo = "TS0000000212";

  // 扣减详情
  clickDeductionDetails(params: any) {
    toDeductionDetails({
      promoType: params.promoType,
      skuId: params.skuId,
      promoId: params.promoId
    });
  }
  created(){
    if (this.$route.query?.activityId) {
      this.activityId = this.$route.query.activityId || ""
    }
  }

  goToTaskCenter(){
    this.$router.push(`${ROUTES.TASK_CENTER.path}`);
  }
}
</script>
