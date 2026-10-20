<template>
  <div class="bargain-edit-page">
    <div class="top-page-title">{{ isFreeCut ? i18n.t('bargain.free') : i18n.t('bargain.discountPurchase') }}</div>
    <ka-bargain-add
      ref="kaBargainAdd"
      currentType="add"
      :service="service"
      :commonService="commonService"
      :activityMode="activityMode"
      :imageDomain="imageDomain"
      @onSubmit="onSubmit"
      @onSave="onSave"
    >
      <!-- 任务时长后插槽 -->
      <template #afterStockNum="data">
        <slot name="afterStockNum" :data="data.formData"></slot>
      </template>
      <!-- 活动库存后插槽 -->
      <template #afterTaskDuration="data">
        <slot name="afterTaskDuration" :data="data.formData"></slot>
      </template>
    </ka-bargain-add>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {BargainDomain, CommonDomain} from "@/service";
import {getEnvConfig} from "@/constants/envConfig";
import {ROUTES} from "@/router";
import { ActivityModeEnum } from '@Abdisalaam/b2c-be-bargain-sdk-i18n/lib/enums/ActivityModeEnum';
import i18n from "@/lang/i18n";

@Component
export default class YbBargainAdd extends Vue {
  private i18n = i18n;
  // service
  private service = BargainDomain;
  private commonService = CommonDomain;
  // 图片配置
  private imageDomain = getEnvConfig().IMAGE_DOMAINS;
  // 砍价类型
  private activityMode = "";

  // @created
  created() {
    // 砍价类型
    if(this.$route.params.activityMode){
      this.activityMode = String(this.$route.params.activityMode);
    }
  }

  get isFreeCut() {
    return String(this.activityMode) === String(ActivityModeEnum.FREE);
  }

  /**
   * 提交
   */
  private onSubmit(){
    this.$router.push({path: ROUTES.BARGAIN_PAGE.path});
  }
  /**
   * 保存
   */
  private onSave(){
    this.$router.push({path: ROUTES.BARGAIN_PAGE.path});
  }
}
</script>
<style lang="scss" scoped>
.bargain-edit-page {
  & /deep/ .ka-bargain-add {
    margin-bottom: 64px;
    .ka-bargain-add-button {
      z-index: 100;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 0;
      box-shadow: var(--rcd-shadow-middle);
      width: 100%;
      background: var(--rcd-color-fill-white);
    }
  }
  .top-page-title {
    color: var(--rcd-color-text-400);
    font-weight: var(--rcd-font-weight-medium);
    font-size: var(--rcd-font-size-20x);
    line-height: var(--rcd-line-height-30);
    margin-bottom: 16px;
  }
}
</style>
