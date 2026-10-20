<template>
    <div>
      <ka-ware-recycle
        :product-service="productDomain"
        :imageDomains="imageDomains"
        :is-self-sale="isSelfSale"
      ></ka-ware-recycle>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {ProductDomain} from "@/service";
import {getEnvConfig} from "@/constants/envConfig";

@Component
export default class RecycleWare extends Vue {
  private productDomain = ProductDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS;

  // 是否自营
  get isSelfSale() {
    return !!Vue.prototype.$globalConfig?.venderInfo?.isSelfSale
  }
}
</script>
