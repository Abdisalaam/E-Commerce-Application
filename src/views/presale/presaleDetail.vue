<template>
  <KaPresaleDetail :commonService="CommonService"
    :service="PresaleService"
    :imgDomains="imgDomains">
  </KaPresaleDetail>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {PresaleDomain, CommonDomain} from "@/service";
import {getEnvConfig} from "@/constants/envConfig";

@Component
export default class DemoKaPresaleDetail extends Vue {
  private readonly CommonService = CommonDomain;
  private readonly PresaleService = PresaleDomain;
  private imgDomains = getEnvConfig().IMAGE_DOMAINS;
}
</script>
