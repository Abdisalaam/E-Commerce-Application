<template>
  <ka-message-page :message-center-service="MessageCenterService"
                   @goToMessageSubscription="goToMessageSubscription"
                   @viewDetail="viewDetail"
  ></ka-message-page>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {MessageCenterDomain} from "../../../service";
import {GetConditionQueryMsgListResultVo} from "@Abdisalaam/b2c-b-mc-sdk-i18n/lib/vos/GetConditionQueryMsgListVo";

@Component
export default class KaMessagePageDemo extends Vue {
  private MessageCenterService = MessageCenterDomain;

  goToMessageSubscription(){
    this.$router.push("/messageCenter/messageSubscription")
  }

  viewDetail(data: GetConditionQueryMsgListResultVo) {
    this.$router.push({
      path: "/messageCenter/messageDetail",
      query: {
        msgId: data.msgId
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.demo-main-content {
  min-height: 100%;
}
</style>
