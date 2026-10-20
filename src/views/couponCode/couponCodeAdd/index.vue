<template>
  <div>
      <ka-coupon-code-add
        :common-service="CommonDomain"
        :coupon-code-service="CouponCodeDomain"
        :task-service="taskDomain"
        :image-domains="imageDomains"
        :download-template-url = 'downloadTemplateUrl'
        :platform="'seller'"
        @backToManageList="goBack"
      ></ka-coupon-code-add>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {CouponCodeDomain, CommonDomain, TaskDomain} from "../../../service";
import {getEnvConfig} from "@/constants/envConfig";
@Component
export default class DemoCouponCodeAdd extends Vue {
  private CouponCodeDomain = CouponCodeDomain;
  private CommonDomain = CommonDomain;
  private taskDomain = TaskDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS;
  private ossResources = getEnvConfig().OSS_RESOURCES;
  private downloadTemplateUrl = `${this.ossResources}CouponCodeSkuImportTemplateForSeller.xlsx`;

  private goBack() {
    this.$router.push('/couponCode/couponCodeManage');
  }
}
</script>
