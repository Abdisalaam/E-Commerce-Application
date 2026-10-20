<template>
    <ka-coupon-list :image-domains="imageDomains"
                    :actions="actions"
                    :coupon-type="couponType"
                    :getExtensionUrlMethod="getExtensionUrlMethod"
                    :extensionBgImage="extensionBgImage"
                    :hasSpecialChannel="true"
                    :showMonitor="true"
                    :coupon-service="couponDomain"></ka-coupon-list>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {CouponDomain} from "@/service";
import {CouponListActions} from "@Abdisalaam/b2c-be-coupon-ui-i18n/packages/pagesComponents/couponList/types"
import {ROUTES} from "@/router";
import {CouponVo} from "@Abdisalaam/b2c-be-coupon-sdk-i18n/lib/vos/return/CouponVo";
import {BIND_TYPE} from "@Abdisalaam/b2c-be-coupon-ui-i18n/packages/common/constants/bizConstans";
import {getEnvConfig} from "@/constants/envConfig";

@Component
export default class CouponManage extends Vue {
  private couponDomain = CouponDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS;
  private extensionBgImage = require("./img/b2cExtensionBg.png");
  private actions: CouponListActions = {
    toAddProductCoupon: () => {
      this.$router.push({
        path: ROUTES.PRODUCT_COUPON_ADD.path
      })
    },
    toAddShopCoupon: () => {
      this.$router.push({
        path: ROUTES.SHOP_COUPON_ADD.path
      })
    },
    toCouponDetail: (row: CouponVo) => {
      if (String(row.bindType) === String(BIND_TYPE.PRODUCT)) {
        this.$router.push({
          path: ROUTES.PRODUCT_COUPON_DETAIL.path,
          query: {
            couponId: String(row?.couponId),
            couponType: String(row?.bindType)
          }
        })
      }
      if (String(row.bindType) === String(BIND_TYPE.SHOP)) {
        this.$router.push({
          path: ROUTES.SHOP_COUPON_DETAIL.path,
          query: {
            couponId: String(row?.couponId),
            couponType: String(row?.bindType)
          }
        })
      }
    }
  }
  private couponType = "";

  mounted () {
    const {couponType} = this.$route.query;
    if (couponType) {
      this.couponType = String(couponType);
    }
  }

  // 标品拼接：https://stjdxpoc.Abdisalaam.sa?qrcodePageType=webview&targetUrl=${`http://h5static.Abdisalaam.sa/coupon?platform=b&activityKey=${coupon?.putKey || ""}`
  getExtensionUrlMethod (coupon: CouponVo, type?: string) {
    const isMobile = type && type === 'mobile';
    const targetUrl = `http://h5static.${Vue.prototype.$globalConfig.outerSecondaryDomain}/coupon?platform=b&activityKey=${coupon?.putKey || ""}`;
    let extensionUrl = `${Vue.prototype.$globalConfig.shareCouponUrl}?qrcodePageType=webview&targetUrl=${targetUrl}`;
    isMobile && (extensionUrl = targetUrl);
    console.log("getExtensionUrlMethod", extensionUrl);
    return extensionUrl;
  }
}
</script>
