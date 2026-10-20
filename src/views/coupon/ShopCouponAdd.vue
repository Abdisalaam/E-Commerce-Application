<template>
  <div class="add-page">
    <div class="top-page-title">{{ $t("coupon.addShopCoupon") }}</div>
    <ka-shop-coupon-add class="add-main-wrap"
                        :coupon-service="couponDomain"
                        :common-service="commonDomain"
                        :actions="actions"
                        :hasSpecialChannel="true"
                        :imageDomains="imageDomains"></ka-shop-coupon-add>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {CommonDomain, CouponDomain} from "@/service";
import {getEnvConfig} from "@/constants/envConfig";
import {CouponAddActions} from "@Abdisalaam/b2c-be-coupon-ui-i18n/packages/pagesComponents/productCouponAdd/Types";
import {ROUTES} from "@/router";
import {BIND_TYPE} from "@Abdisalaam/b2c-be-coupon-ui-i18n/packages/common/constants/bizConstans";

@Component
export default class ShopCouponAdd extends Vue {
  private couponDomain = CouponDomain;
  private commonDomain = CommonDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS;
  private actions: CouponAddActions = {
    saveSuccessCallback: () => {
      this.$router.push({
        path: ROUTES.COUPON_MANAGE.path,
        query: {
          couponType: String(BIND_TYPE.SHOP)
        }
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.add-page {
  & .add-main-wrap {
    margin-bottom: 64px;
    & /deep/ .bottom-action-buttons {
      z-index: 100;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 0;
      box-shadow: var(--rcd-shadow-middle);
      width: 100%;
      padding: 12px 0;
      background: var(--rcd-color-fill-white);
    }
  }
  .top-page-title {
    color: var(--rcd-color-text-400);
    font-weight: var(--rcd-font-weight-medium);
    font-size: var(--rcd-font-size-20x);
    line-height: var(--rcd-line-height-30);
    margin-bottom: 16px;
  }
}
</style>
