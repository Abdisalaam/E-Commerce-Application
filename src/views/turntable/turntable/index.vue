<template>
  <ka-turntable
    :lottery-service="LotteryService"
    :common-service="CommonService"
    :marketing-common-service="MarketingCommonService"
    @on-edit="handleEdit"
    @on-detail="handleDetail"
    @on-record="navigateToAwardRecord"
    :image-domains="IMG_DOMAINS"
    :lottery-page-url="lotteryPageUrl"
    :platform-avatar="$globalConfig.platformAvatar"
  ></ka-turntable>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {TurntableDomain, CommonDomain, MarketingCommonDomain} from "@/service";
import {ActivityPageVo} from "@Abdisalaam/b2c-be-turnable-sdk-i18n/lib/vos/ActivityPageVo";
import {getEnvConfig} from "@/constants/envConfig";
import {ROUTES} from "@/router/index";

@Component
export default class DemoTurntable extends Vue {
  private LotteryService = TurntableDomain;
  private CommonService = CommonDomain;
  private MarketingCommonService = MarketingCommonDomain;
  private IMG_DOMAINS = Vue.prototype.$globalConfig?.imageDomain;
  private lotteryPageUrl = getEnvConfig().LOTTERY_PAGE_URL;

  private handleDetail(record: ActivityPageVo | null) {
    this.$router.push({
      path: ROUTES.TURNABLE_ACTIVITY_DETAIL.path,
      query: {
        activityId: record?.activityId + ''
      }
    });
  }

  private navigateToAwardRecord(record: ActivityPageVo | null) {
    this.$router.push({
      path: ROUTES.TURNABLE_AWARD_RECORD.path,
      query: {
        activityId: record?.activityId + '',
        activityName: record?.activityName + ''
      }
    });
  }

  private handleEdit(record: ActivityPageVo | null, copyFlag = false) {
    if (!record) {
      // this.$router.push('/turn/lottery');
      this.$router.push({
        path: ROUTES.TURNABLE_CREAT_LOTTERY.path
      });
      return;
    }

    if(copyFlag){
      this.$router.push({
        path: ROUTES.TURNABLE_CREAT_LOTTERY.path,
        query: {
          activityId: record?.activityId + '',
          copyFlag: copyFlag + ''
        }
      });
    }else{
      this.$router.push({
        path: ROUTES.TURNABLE_CREAT_LOTTERY.path,
        query: {
          activityId: record?.activityId + ''
        }
      });
    }
  }
}
</script>
