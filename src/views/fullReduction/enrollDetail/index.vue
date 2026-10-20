<template>
  <KaFullReduceEnrollDetail :service="fullReductionService" :imageDomain="imageDomains"></KaFullReduceEnrollDetail>
</template>

<script lang="ts">
import { getEnvConfig } from '@/constants/envConfig';
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {FullReductionDomain} from "../../../service";

@Component
export default class DemoEnrollDetail extends Vue {
  fullReductionService = FullReductionDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS

}
</script>
