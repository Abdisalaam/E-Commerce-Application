<template>
  <KaShopCategory
    :service="service"
    :imgDomains="imageDomains"
  >
  </KaShopCategory>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ShopDomain } from "../../service/index";
import { getEnvConfig } from "@/constants/envConfig";

@Component({})
export default class ShopCategoryInfo extends Vue {
  private readonly service = ShopDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS;
}
</script>
