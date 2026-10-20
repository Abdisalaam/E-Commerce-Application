<template>
<div class="turntable-detail">
  <div class="title">{{i18n.t('turntable.promotionDetail')}}</div>
  <ka-activity-detail :paid-feature="false"
                      :lottery-service="LotteryService"
                      :image-domains="IMG_DOMAINS">
  </ka-activity-detail>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {TurntableDomain} from "@/service";
import {getEnvConfig} from "@/constants/envConfig";
import i18n from "@/lang/i18n";

@Component
export default class DemoKaActivityDetail extends Vue {
  private LotteryService = TurntableDomain;
  private IMG_DOMAINS = getEnvConfig().IMAGE_DOMAINS;
  private i18n = i18n;
}
</script>
<style lang="scss" scoped>
.turntable-detail {
  .title {
    color: var(--rcd-color-text-400);
    font-weight: var(--rcd-font-weight-medium);
    font-size: var(--rcd-font-size-20x);
    line-height: var(--rcd-line-height-30);
    margin-bottom: 16px;
  }
}
</style>
