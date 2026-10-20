<template>
  <div class="creat-turnTable">
    <div class="title">{{i18n.t('turntable.addPromotion')}}</div>
      <ka-create-lottery
          :point-feature="false"
          :image-domains="IMG_DOMAINS"
          :default-award-img="DEFAULT_AWARD_IMG"
          :common-service="CommonService"
          :lottery-service="LotteryService"
          :ext-form-settings="extSettings"
          :btn-orders="btnOrders"
          @on-list="onList"
          @on-coupon-page="onCouponPage">
      </ka-create-lottery>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {CommonDomain, TurntableDomain} from "@/service";
import { ROUTES } from "@/router/index";
import {getEnvConfig} from "@/constants/envConfig";
import i18n from "@/lang/i18n";

@Component
export default class DemoCreateTurntable extends Vue {
  private IMG_DOMAINS = getEnvConfig().IMAGE_DOMAINS;
  private ASSETS_DOMAIN = getEnvConfig().ASSETS_DOMAIN;
  private CommonService = CommonDomain;
  private LotteryService = TurntableDomain;
  private i18n = i18n;
  private DEFAULT_AWARD_IMG = Vue.prototype.$globalConfig.turntableImage;
  private extSettings = {
    extDisabledSettings: {
      // 
      turntableType: true,
      // 用户限制禁用
      userLimited: true
    },
    extVisibleSettings: {
      // 额外抽奖次数
      extraLotteryChance: false,
      // 积分抽奖(包括混合抽奖)
      luckyDraw: false,
      // 
      pointPool: false
    },
    extPoolSetting:{
      // 积分池校验文案
      pointText:true,
      // 积分池校验
      checkPointPool:true,
      // 宜宾积分池需申请
      // 创建积分池地址：b2coper.Abdisalaam.sa/insetsys?menuId=755&topMenuId=745
      pointPoolValue: Vue.prototype.$globalConfig.pointPoolValue
    }
  }

  // private onPool() {
  //   // console.log('onPool去积分池子');
  //   window.open(OUTER_ROUTERS.SCORE.SCORE_MAN, "_blank");
  // }
  private onList() {
    console.log("on-list");
    this.$router.push({
      path: ROUTES.TURNABLE_LIST.path,
      query: {
        delay: '400'
      }
    });
  }
  private btnOrders = [ 'cancel','prev','draft','save']

  private onCouponPage() {
    // console.log('onCouponPage去优惠券');
    window.open(ROUTES.COUPON_MANAGE.path, "_blank");
  }
}
</script>

<style lang="scss" scoped>
.creat-turnTable{
  .title {
    color: var(--rcd-color-text-400);
    font-weight: var(--rcd-font-weight-medium);
    font-size: var(--rcd-font-size-20x);
    line-height: var(--rcd-line-height-30);
    margin-bottom: 16px;
  }
  .ka-create-lottery {
    /deep/ .ka-lottery-condition {
      width: auto;
    }
    margin-bottom: 56px;
    /deep/ .ka-create-lottery-footer {
        z-index: 100;
        position: absolute;
        bottom: 0;
        left: 0;
        border-radius: 0;
        box-shadow: var(--rcd-shadow-middle);
        width: 100%;
        background: var(--rcd-color-fill-white);
        display: inline-block;
        text-align: center;
        padding: 12px 0;
    }
  }
}
</style>
