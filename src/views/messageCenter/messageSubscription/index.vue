<template>
  <div>
    <KaMessageSubscription :message-center-service="MessageCenterService"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {MessageCenterDomain} from "../../../service";

@Component
export default class DemoMessageSubscription extends Vue {
  private MessageCenterService = MessageCenterDomain;
}
</script>
