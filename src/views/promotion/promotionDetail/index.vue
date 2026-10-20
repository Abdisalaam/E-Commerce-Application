<template>
  <div>
      <ka-promotion-detail :coupon-submit-service="couponSubmitDomain"
                        :product-service="productDomain"
                        :imageDomains="imageDomains"></ka-promotion-detail>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import { CouponSubmitDomain} from "@/service";
import { ProductDomain } from "@/service";
import {getEnvConfig} from "@/constants/envConfig";

@Component
export default class DemoPromotionDetail extends Vue {
  private couponSubmitDomain = CouponSubmitDomain;
  private productDomain = ProductDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS;
}
</script>
