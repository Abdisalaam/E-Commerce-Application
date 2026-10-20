<template>
  <div class="add-page">
    <div class="top-page-title">{{ $t("coupon.addProductCoupon") }}</div>
    <ka-product-coupon-add class="add-main-wrap"
                           :coupon-service="couponDomain"
                           :common-service="commonDomain"
                           :actions="actions"
                           :hasSpecialChannel="true"
                           :download-spu-template-url="downloadSpuTemplateUrl"
                           :download-sku-template-url="downloadSkuTemplateUrl"
                           :imageDomains="imageDomains"></ka-product-coupon-add>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {getEnvConfig} from "@/constants/envConfig";
import {ROUTES} from "@/router";
import {CommonDomain, CouponDomain} from "@/service";
import {CouponAddActions} from "@Abdisalaam/b2c-be-coupon-ui-i18n/packages/pagesComponents/productCouponAdd/Types"
import {BIND_TYPE} from "@Abdisalaam/b2c-be-coupon-ui-i18n/packages/common/constants/bizConstans";
import {mainScrollTop} from "@/constants/busi/BusiConstants";

@Component
export default class AddProductCoupon extends Vue {
  private couponDomain = CouponDomain;
  private commonDomain = CommonDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS;
  private ossResources = getEnvConfig().OSS_RESOURCES;
  private downloadSpuTemplateUrl = `${this.ossResources}spuImportTemplate.xlsx`;
  private downloadSkuTemplateUrl = `${this.ossResources}skuImportTemplate.xlsx`;
  private actions: CouponAddActions = {
    saveSuccessCallback: () => {
      this.$router.push({
        path: ROUTES.COUPON_MANAGE.path,
        query: {
          couponType: String(BIND_TYPE.PRODUCT)
        }
      })
    },
    scrollTopCallback: mainScrollTop
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
