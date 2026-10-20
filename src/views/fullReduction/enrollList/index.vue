<template>
  <KaFullReduceEnrollList
    :service="fullReductionService"
    :imageDomains="imageDomains"
    @toEnrollPage="handleEnrollPage"
    @toDetailPage="handleDetailPage"
  ></KaFullReduceEnrollList>
</template>

<script>
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {FullReductionDomain} from "../../../service";
import {getEnvConfig} from "@/constants/envConfig";
@Component
export default class DemoEnrollList extends Vue {
  fullReductionService = FullReductionDomain;
  imageDomains = getEnvConfig().IMAGE_DOMAINS;

  /**
   * 跳转报名页
   * */
  handleEnrollPage(params){
    const {id} = params;
    this.$router.push({
      path: '/fullReductionEnroll/enroll',
      query: {
        id
      }
    })
  }

  /**
   * 跳转详情页
   * */
  handleDetailPage(params){
    const {id} = params;
    this.$router.push({
      path: "/fullReductionEnroll/detail",
      query: {
        id
      }
    })
  }
}
</script>


