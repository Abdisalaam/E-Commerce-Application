<template>
  <div>
    <ka-coupon-code-detail
      :coupon-code-service="CouponCodeDomain"
      :image-domains="imageDomains"
      :promoCodeId="promoCodeId"
      @goBack="goBack"
    ></ka-coupon-code-detail>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { CouponCodeDomain } from "../../../service";
import {getEnvConfig} from "@/constants/envConfig";
@Component
export default class DemoCouponCodeDetail extends Vue {
  private CouponCodeDomain = CouponCodeDomain;
  private promoCodeId = this.$route.query.couponCodeId as string;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS;
  private goBack() {
    this.$router.push('/couponCode/couponCodeManage');
  }
}
</script>
