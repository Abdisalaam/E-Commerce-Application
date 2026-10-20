<template>
<div class="tb">
  <KaBSubmitPage :service = "SubmitService"
                 :imageDomain="IMG_DOMAINS"
                 :detailPath="detailPath"
                 @toDiscountMonitor="toDiscountMonitor"></KaBSubmitPage>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {SubmitDomain} from "../../../service/index";
import { getEnvConfig } from "../../../constants/envConfig";
import {ROUTES} from "@/router";
import { toDeductionDetails } from "@/constants/busi/BusiConstants";

@Component
export default class DemoBSubmitPage extends Vue {
  SubmitService = SubmitDomain;
  IMG_DOMAINS = getEnvConfig().IMAGE_DOMAINS;
  detailPath=ROUTES.TB_SUBMIT_DETAIL.path;

  toDiscountMonitor(skuId: string, promoId: string, promoType: number) {
    toDeductionDetails({
      promoType: promoType,
      skuId: skuId,
      promoId: promoId
    });
  }
}
</script>
