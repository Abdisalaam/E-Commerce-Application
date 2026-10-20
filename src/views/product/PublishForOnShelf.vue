<template>
  <div class="publish-page">
    <div class="top-page-title">{{ title }}</div>
    <ka-ware-publish :product-service="productDomain"
                     :media-service="mediaDomain"
                     :common-service="commonDomain"
                     :product-id="productId"
                     :actions="actions"
                     :is-edit="isEdit"
                     :is-copy="isCopy"
                     :supportVop="supportVop"
                     :supportLoc="supportLoc"
                     :extFormSettings="extFormSettings"
                     :is-required-shipping-tmp="requireShippingTmp"
                     :forceHttpsImg="forceHttpsImg"
                     :is-self-sale="isSelfSale"
                     :imageDomains="imageDomains"></ka-ware-publish>
  </div>
</template>

<script lang="ts">
import {Component} from "vue-property-decorator";
import {ROUTES} from "@/router";
import {PublishMixin} from "@/views/product/PublishMixin";

@Component
export default class PublishForOnShelf extends PublishMixin {

  // 重写-到商品列表
  toProductList() {
    this.$router.push({
      path: ROUTES.ON_SHELF_WARE.path
    })
  }

}
</script>
<style lang="scss" scoped>
.publish-page {
  & /deep/ .ka-ware-publish {
    margin-bottom: 64px;
    .publish-buttons-module {
      z-index: 100;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 0;
      box-shadow: var(--rcd-shadow-middle);
      width: 100%;
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
