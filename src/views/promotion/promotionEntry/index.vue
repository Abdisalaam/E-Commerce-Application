<template>
  <div>
      <ka-promotion-entry :coupon-submit-service="couponSubmitDomain"
                        :product-service="productDomain"
                        :common-service="commonDomain"
                        :imageDomains="imageDomains"></ka-promotion-entry>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import { CouponSubmitDomain } from "@/service";
import { ProductDomain } from "@/service";
import { CommonDomain } from "@/service";
import {getEnvConfig} from "@/constants/envConfig";

@Component
export default class DemoPromotionEntry extends Vue {
  private couponSubmitDomain = CouponSubmitDomain;
  private productDomain = ProductDomain;
  private commonDomain = CommonDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS;
}
</script>
