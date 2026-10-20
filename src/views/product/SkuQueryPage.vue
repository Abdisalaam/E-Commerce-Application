<template>
  <ka-ware-sku-query-page :product-service="productDomain"
                          :is-self-sale="isSelfSale"
                          :actions="action"
                          :image-domains="imageDomains"></ka-ware-sku-query-page>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {ProductDomain} from "@/service";
import {getEnvConfig} from "@/constants/envConfig";
import {ROUTES} from "@/router";
import {PRODUCT_STATUS, toSkuDetail } from "@/constants/busi/BusiConstants";
import {SkuPageVo} from "@Abdisalaam/b2c-be-product-sdk-i18n/lib/vos/returns/SkuPageVo";

@Component
export default class SkuQueryPage extends Vue {
  public productDomain = ProductDomain;
  public imageDomains = getEnvConfig().IMAGE_DOMAINS;
  action = {
    onEditProduct: this.toEditPage,
    toSkuDetail: this.toSkuDetail,
  }

  // 是否自营
  get isSelfSale() {
    return !!Vue.prototype.$globalConfig?.venderInfo?.isSelfSale
  }

  // 商品编辑页
  public toEditPage(productId: string, skuInfo: SkuPageVo) {
    if (String(skuInfo?.productStatus) === String(PRODUCT_STATUS.ON_SHELF)) {
      this.$router.push({path: ROUTES.ON_SHELF_WARE_EDIT.path + "?productId=" + productId});
    } else {
      this.$router.push({path: ROUTES.OFF_SHELF_WARE_EDIT.path + "?productId=" + productId});
    }
  }

  // 跳转到SKU详情
  public toSkuDetail (row: SkuPageVo) {
    row?.skuId && toSkuDetail(row.skuId);
  }
}
</script>

