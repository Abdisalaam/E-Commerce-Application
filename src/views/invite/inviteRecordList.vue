<template>
  <div>
    <div class="invite-padding">
      <ka-invite-record-list
        :invite-service="InviteService"
      >
      </ka-invite-record-list>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { InviteDomain } from "@/service";

@Component
export default class RecordList extends Vue {
  private InviteService = InviteDomain;
}
</script>

<style lang="scss" scoped>
.invite-padding{
  background-color: var(--rcd-color-fill-white);
  border-radius: var(--rcd-border-radius-8x);
  padding: 24px;
}
</style>
