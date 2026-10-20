<template>
  <KaMessageDetail
    :message-center-service="MessageCenterService"
    @other="other"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {MessageCenterDomain} from "../../../service";
import i18n from "@/lang/i18n";

@Component
export default class DemoMessageDetail extends Vue {
  private i18n = i18n;
  private MessageCenterService = MessageCenterDomain;
  private readonly breadcrumbs = [
    {
      label: `${this.i18n.t('messageCenter.inStationInfo')}`,
      url: '/messageCenter/messagePage'
    },
    {
      label:  `${this.i18n.t('messageCenter.infoDetail')}`,
      url: '/messageCenter/messageDetail'
    }
  ]
  other(msgId: string){
    this.$router.push({
      path: '/messageCenter/messageDetail',
      query: {
        msgId
      },
      replace: true
    })
  }
  _handleGoBack() {
    this.$router.push({path: '/messageCenter/messagePage'});
  }
}
</script>
