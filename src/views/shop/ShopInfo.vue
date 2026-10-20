<template>
  <KaShopInfo
    :service="service"
    :CommonService="CommonService"
    :imgDomains="imageDomains"
  >
  </KaShopInfo>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ShopDomain, CommonDomain } from "../../service/index";
import { getEnvConfig } from "@/constants/envConfig";

@Component({})
export default class ShopInfo extends Vue {
  private readonly service = ShopDomain;
  private readonly CommonService = CommonDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS;
}
</script>
