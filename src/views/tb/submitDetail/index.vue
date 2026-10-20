<template>
  <div class="tb-sku">
    <div class="title">{{i18n.t('tb.flashSale')}}</div>
    <KaBSubmitSkuPage :service = "SubmitService" :CommonService="CommonService" :submitProductService="SubmitProductService" :imageDomain="IMG_DOMAINS"></KaBSubmitSkuPage>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import i18n from "@/lang/i18n";
import {Component} from "vue-property-decorator";
import {SubmitDomain, CommonDomain, SubmitProductDomain} from "../../../service/index";
import {getEnvConfig} from "../../../constants/envConfig";

@Component
export default class DemoBSubmitSkuPage extends Vue {
  private i18n = i18n;
  SubmitService = SubmitDomain
  CommonService = CommonDomain
  SubmitProductService = SubmitProductDomain
  IMG_DOMAINS = getEnvConfig().IMAGE_DOMAINS;
}
</script>

<style lang="scss" scoped>
.tb-sku{
  height:  calc(100% - 20px);
  .title {
    font-size: var(--rcd-font-size-20x);
    color: var(--rcd-color-text-400);
    font-weight: var(--rcd-font-weight-medium);
    line-height: var(--rcd-line-height-30);
  }
  /deep/ .page-title {
    display: none;
  }
  /deep/ .sku-pool-card {
    min-height: 522px;
  }
}
</style>
