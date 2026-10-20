<template>
  <div class="bargain-task-page">
    <div class="top-page-title">{{ i18n.t('bargain.bargainingManage') }}</div>
    <ka-bargain-task-page :service="service" :activityId="activityId" @onBack="onBack"></ka-bargain-task-page>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {BargainDomain} from "@/service";
import i18n from "@/lang/i18n";

@Component
export default class DemoBargainTaskPage extends Vue {
  private i18n = i18n;
  // service
  private service = BargainDomain;
  // 砍价id
  private activityId: number | any = "";
  // @created
  created(){
    if(this.$route.params.activityId){
      this.activityId = +this.$route.params.activityId;
    }
  }
  /**
   * 返回
   * @public
   */
  private onBack(){
    this.$router.go(-1);
  }
}
</script>
<style lang="scss" scoped>
.bargain-task-page {
  & /deep/ .ka-bargain-task-page {
    margin-bottom: 64px;
    .ka-bargain-task-back {
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
