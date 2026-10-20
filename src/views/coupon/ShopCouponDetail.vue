<template>
  <div class="detail-page full-height">
    <div class="detail-title">{{ $t("coupon.viewShopCoupon") }}</div>
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
import {CouponDomain} from "@/service";
import {getEnvConfig} from "@/constants/envConfig";
import {BIND_TYPE} from "@Abdisalaam/b2c-be-coupon-ui-i18n/packages/common/constants/bizConstans";

@Component
export default class ShopCouponDetail extends Vue {
  private couponDomain = CouponDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS;
  private couponType = BIND_TYPE.SHOP;
  private couponId = "";

  mounted () {
    const {couponId} = this.$route.query;
    this.couponId = String(couponId);
  }
}
</script>
