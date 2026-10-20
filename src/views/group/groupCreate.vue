<template>
  <KaGroupCreate
    @navigateToList="navigateToList"
    :ImageDomain="ImageDomain"
    :extUseAutoCollage="true"
    :GroupService="GroupService"
    :CommonService="CommonService" />
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from "vue-property-decorator";
import {GroupDomain, CommonDomain} from "@/service";
import { getEnvConfig } from '@/constants/envConfig';

@Component
export default class DemoGroupCreate extends Vue {
  GroupService = GroupDomain
  CommonService = CommonDomain
  ImageDomain = getEnvConfig().IMAGE_DOMAINS

  navigateToList() {
    this.$router.push('/groupListPage?delay=3')
  }
}
</script>
