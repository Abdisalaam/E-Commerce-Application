<template>
  <div class="page-grey invite-detail">
    <div class="invite-padding">
      <ka-invite-activity-detail
        :invite-service="InviteService"
      >
      </ka-invite-activity-detail>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { InviteDomain } from "@/service";

@Component
export default class InviteDetail extends Vue {
  private InviteService = InviteDomain;
}
</script>

<style lang="scss" scoped>
.invite-padding{
  // background-color: var(--rcd-color-fill-white);
  // border-radius: var(--rcd-border-radius-8x);
  // padding: 24px;
  /deep/ .ka-create-activity{
    // padding: 0;
  }
}
.invite-detail{
  /deep/ .floor-card{
    // padding: 0;
  }
}
</style>
