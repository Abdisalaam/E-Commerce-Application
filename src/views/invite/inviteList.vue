<template>
  <div class="invite-padding">
    <ka-invite-activity-list
      :invite-service="InviteService"
      :common-service="CommonService"
      :marketing-common-service="MarketingCommonService"
      @on-detail="goToDetail"
      @on-edit="handleEditActivity"
      @on-invite-records="goRecords"
      @on-copy="handleCopyActivity"
      :imageDomains="imageDomains"
    >
    </ka-invite-activity-list>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {InviteDomain, CommonDomain, MarketingCommonDomain} from "@/service";
import {ActivityExtVo} from "@Abdisalaam/b2c-be-invite-sdk-i18n/lib/vos/ActivityExtVo";
import {ROUTES} from "@/router";
import { getEnvConfig } from '@/constants/envConfig';

@Component
export default class List extends Vue {
  private InviteService = InviteDomain;
  private CommonService = CommonDomain;
  private MarketingCommonService = MarketingCommonDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS;

  private goToDetail(record: ActivityExtVo) {
    // this.$router.push('/invite/detail?activityId=' + record.activityVO.id);
    this.$router.push({
      path: ROUTES.INVITE_DETAIL.path,
      query: {
        activityId: record.activityVO.id + ''
      }
    });
  }
  private handleEditActivity(record?: ActivityExtVo) {
    if (record) {
      // this.$router.push('/invite/activity?activityId=' + record.activityVO.id);
      this.$router.push({
        path: ROUTES.INVITE_ACTIVITY.path,
        query: {
          activityId: record.activityVO.id + ''
        }
      });
    } else {
      // this.$router.push('/invite/activity');
      this.$router.push({
        path: ROUTES.INVITE_ACTIVITY.path,
      });
    }
  }

  private handleCopyActivity(record?: ActivityExtVo) {
    if (record) {
      this.$router.push({
        path: ROUTES.INVITE_ACTIVITY.path,
        query: {
          activityId: record.activityVO.id + '',
          pageType: 'copy'
        }
      });
    } else {
      this.$router.push({
        path: ROUTES.INVITE_ACTIVITY.path
      })
    }
  }

  private goRecords(record: ActivityExtVo) {
    // this.$router.push('/invite/recordList?activityId=' + record.activityVO.id);
    this.$router.push({
        path: ROUTES.INVITE_RECORED.path,
        query: {
          activityId: record.activityVO.id + ''
        }
      });
  }
}
</script>

<style lang="scss" scoped>
.invite-padding{
  background-color: var(--rcd-color-fill-white);
  border-radius: var(--rcd-border-radius-8x);
  padding: 24px;
}
</style>
