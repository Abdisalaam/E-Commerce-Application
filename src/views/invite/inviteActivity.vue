<template>
  <div
    class="invite-padding publish-page">
    <div class="top-page-title">
      {{i18n.t('invite.inviteAddTitle')}}
    </div>
    <div class="invite-padding-content">
      <ka-invite-create-activity
        :invite-service="InviteService"
        :btn-orders="btnOrders"
        @on-create-coupon="onCreateCoupon"
        @on-list="onList">
      </ka-invite-create-activity>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { InviteDomain } from "@/service";
import { ROUTES } from "@/router";
import i18n from "@/lang/i18n";

@Component
export default class InviteActivity extends Vue {
  private i18n = i18n;
  private InviteService = InviteDomain;
  private onCreateCoupon() {
    setTimeout(() => {
      window.open(ROUTES.COUPON_MANAGE.path, "_blank");
    })
  }
  private onList() {
    // this.$router.push("/invite/list");
    this.$router.push({
      path: ROUTES.INVITE_MANAGE.path,
    });
  }
  private btnOrders = ["cancel", "prev", "save"];
}
</script>

<style lang="scss" scoped>
.invite-padding {
  .top-page-title {
    color: var(--rcd-color-text-400);
    font-weight: var(--rcd-font-weight-medium);
    font-size: var(--rcd-font-size-20x);
    line-height: var(--rcd-line-height-30);
    margin-bottom: 16px;
  }
  .invite-padding-content {
    background-color: var(--rcd-color-fill-white);
    border-radius: var(--rcd-border-radius-8x);
    padding: 24px;
    margin-bottom: 60px;
  }
}
</style>
