<template>
  <KaBrandList
    :service="service"
    :commonService="CommonService"
    :imgDomains="imageDomains"
    @routerBrandCertification="routerBrandCertification"
  >
  </KaBrandList>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ShopDomain, CommonDomain } from "../../service/index";
import { getEnvConfig } from "@/constants/envConfig";
import { ROUTES } from "@/router";

@Component({})
export default class BrandList extends Vue {
  private readonly service = ShopDomain;
  private CommonService = CommonDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS;

  private routerBrandCertification(data: any) {
    this.$router.push({ path: ROUTES.BRAND_CERTIFICATION.path, query: data });
  }
}
</script>
