<template>
  <div class="add-page">
    <div class="top-page-title">{{ $t("promo.addSinglePromo") }}</div>
    <ka-single-promo-add class="add-main-wrap"
                         :promo-service="promoDomain"
                         :actions="actions"
                         :common-service="commonDomain"
                         :task-service="taskDomain"
                         :sku-template-url="skuTemplateUrl"
                         :stock-limit-sku-template-url="stockLimitSkuTemplateUrl"
                         :imageDomains="imageDomains"></ka-single-promo-add>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {getEnvConfig} from "@/constants/envConfig";
import {CommonDomain, PromoDomain, TaskDomain} from "@/service";
import {PromoAddActions} from "@Abdisalaam/b2c-be-promotion-ui-i18n/packages/pagesComponents/singlePromoAdd/Types"
import {ROUTES} from "@/router";


@Component
export default class AddFreeDeliveryPromo extends Vue {
  private promoDomain = PromoDomain;
  private commonDomain = CommonDomain;
  private taskDomain = TaskDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS;
  private ossResources = getEnvConfig().OSS_RESOURCES;
  private skuTemplateUrl = `${this.ossResources}PricePromotionSkuImportTemplate.xlsx`;
  private stockLimitSkuTemplateUrl = `${this.ossResources}PricePromotionSkuImportTemplateIncludingStock.xlsx`;

  private actions: PromoAddActions = {
    saveSuccessCallback: () => {
      this.$router.push({
        path: ROUTES.PROMO_SINGLE_LIST.path
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
