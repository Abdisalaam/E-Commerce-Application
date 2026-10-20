<template>
  <div class="detail-page">
    <div class="detail-title">{{ $t("coupon.viewProductCoupon") }}</div>
    <ka-coupon-detail class="detail-main"
                      :coupon-service="couponDomain"
                      :coupon-type="couponType"
                      :coupon-id="couponId"
                      :hasSpecialChannel="true"
                      :imageDomains="imageDomains"></ka-coupon-detail>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {BIND_TYPE} from "@Abdisalaam/b2c-be-coupon-ui-i18n/packages/common/constants/bizConstans";
import {CouponDomain} from "@/service";
import {getEnvConfig} from "@/constants/envConfig";


@Component
export default class ProductCouponDetail extends Vue {
  private couponDomain = CouponDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS;
  private couponType = BIND_TYPE.PRODUCT;
  private couponId = "";

  mounted () {
    const {couponId} = this.$route.query;
    this.couponId = String(couponId);
  }

}
</script>
