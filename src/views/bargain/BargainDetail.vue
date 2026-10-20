<template>
  <div class="bargain-detail-page">
    <div class="top-page-title">{{ i18n.t('bargain.bargainingDetail') }}</div>
    <ka-bargain-detail
      currentType="detail"
      :service="service"
      :activityId="activityId"
      @onSubmit="onSubmit"
      @onSave="onSave"
    >
    </ka-bargain-detail>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {BargainDomain} from "@/service";
import {ROUTES} from "@/router";
import i18n from "@/lang/i18n";

@Component
export default class DemoBargainDetail extends Vue {
  private i18n = i18n;
  // service
  private service = BargainDomain;
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
.bargain-detail-page {
  & /deep/ .ka-bargain-detail {
    margin-bottom: 64px;
    .ka-bargain-detail-bottom-buttons {
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
