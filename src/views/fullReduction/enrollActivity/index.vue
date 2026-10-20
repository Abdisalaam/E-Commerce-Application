<template>
  <div>
    <KaFullReduceEnrollActivity :service="fullReductionService"
                      :common-service="commonDomain"
                      :imageDomains="imageDomains"
                      @toEnrollList="toEnrollListPage"
    ></KaFullReduceEnrollActivity>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {FullReductionDomain, CommonDomain} from "../../../service";
import {getEnvConfig} from "@/constants/envConfig";
import {ROUTES} from "@/router";

@Component
export default class DemoEnrollAcrivity extends Vue {
  fullReductionService = FullReductionDomain
  commonDomain = CommonDomain
  imageDomains = getEnvConfig().IMAGE_DOMAINS

  toEnrollListPage(){
    this.$router.push({
      path: ROUTES.FULL_REDUCTION_ENROLL.path
    })
  }
}
</script>
