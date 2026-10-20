<template>
  <div class="detail-page">
    <div class="detail-title">{{ $t("promo.viewSinglePromo") }}</div>
    <ka-single-promo-detail class="detail-main"
                            :promo-service="promoDomain"
                            :promo-id="promoId"
                            :imageDomains="imageDomains"
                            @clickDeductionDetails="clickDeductionDetails"
                            :skuBulkExitTemplateUrl="skuBulkExitTemplateUrl"
                            @goToTaskCenter="goToTaskCenter"
                            :domain-no="domainNo"
                            :scene-no="sceneNo"
                            ></ka-single-promo-detail>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {PromoDomain} from "@/service";
import {getEnvConfig} from "@/constants/envConfig";
import { toDeductionDetails } from "@/constants/busi/BusiConstants";
import {ROUTES} from "@/router";

@Component
export default class ViewSinglePromo extends Vue {
  promoDomain = PromoDomain;
  imageDomains = getEnvConfig().IMAGE_DOMAINS;
  promoId = "";
  skuBulkExitTemplateUrl = `${Vue.prototype.$globalConfig?.ossResources}SkuBulkExitTemplate.xlsx`;
  domainNo = "TD0000000056";
  sceneNo =  "TS0000000213";

  mounted () {
    const {promoId} = this.$route.query;
    this.promoId = String(promoId);
  }
  // 扣减详情
  clickDeductionDetails(params: any) {
    toDeductionDetails({
      promoType: params.promoType,
      skuId: params.skuId,
      promoId: params.promoId
    });
  }

  goToTaskCenter(){
    this.$router.push(`${ROUTES.TASK_CENTER.path}`);
  }
}
</script>
