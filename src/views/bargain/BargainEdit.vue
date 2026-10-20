<template>
  <div class="bargain-edit-page">
    <div class="top-page-title">{{ i18n.t('bargain.editBargaining') }}</div>
    <ka-bargain-add
      currentType="edit"
      :service="service"
      :commonService="commonService"
      :imageDomain="imageDomain"
      :activityId="activityId"
      @onSubmit="onSubmit"
      @onSave="onSave"
    >
    </ka-bargain-add>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {BargainDomain, CommonDomain} from "@/service";
import {getEnvConfig} from "@/constants/envConfig";
import {ROUTES} from "@/router";
import i18n from "@/lang/i18n";

@Component
export default class DemoBargainEdit extends Vue {
  private i18n = i18n;
  // service
  private service = BargainDomain;
  private commonService = CommonDomain;
  // 图片配置
  private imageDomain = getEnvConfig().IMAGE_DOMAINS;
  // 砍价id
  private activityId: any = "";
  // @created
  created(){
    if(this.$route.params.activityId){
      this.activityId = +this.$route.params.activityId;
    }
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

