<template>
  <div class="edit-page">
    <div class="edit-page-title">{{i18n.t('shop.brandQualification')}}</div>
    <KaBrandCertification
      class="edit-content"
      :service="service"
      :imgDomains="imageDomains"
      :CommonService="CommonService"
      @routerToBrandList="routerToBrandList"
    >
    </KaBrandCertification>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ShopDomain, CommonDomain } from "../../service/index";
import { getEnvConfig } from "@/constants/envConfig";
import { ROUTES } from "@/router";
import i18n from "@/lang/i18n";

@Component({})
export default class BrandList extends Vue {
  private i18n = i18n;
  private readonly service = ShopDomain;
  private CommonService = CommonDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS;
  private routerToBrandList = () => {
    this.$router.push({ path: ROUTES.BRAND_LIST.path });
  };
}
</script>
<style lang="scss" scoped>
.edit-page {
  .edit-page-title {
    color: var(--rcd-color-text-400);
    font-weight: var(--rcd-font-weight-medium);
    font-size: var(--rcd-font-size-20x);
    line-height: var(--rcd-line-height-30);
    margin-bottom: 16px;
  }
  .edit-content {
    margin-bottom: 90px;
    & /deep/ .ka-brand-certification-btn {
      z-index: 100;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 0;
      box-shadow: var(--rcd-shadow-middle);
      width: 100%;
      background: var(--rcd-color-fill-white);
      padding: 13px 0;
    }
  }
}
</style>
