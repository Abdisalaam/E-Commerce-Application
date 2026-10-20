<template>
  <div class="store-detail">
    <ka-store-detail-page
      :service="StoreService"
      :common-service="CommonService"
      :img-domains="imgDomains"
      :storeId="storeId"
      :mapKey="mapKey"
      :language="AREA_MAP_LANGUAGE[currentLang]"
    >
    <span slot="pageTitle" class="top-page-title">{{i18n.t('store.StoreDetails')}}</span>
    </ka-store-detail-page>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import {StoreDomain} from "@/service/index";
import {CommonDomain} from "@/service/index";
import {getEnvConfig} from "@/constants/envConfig";
import i18n from "@/lang/i18n";

@Component
export default class DemoStoreDetailPage extends Vue {
  private i18n = i18n;
  private StoreService = StoreDomain;
  private CommonService = CommonDomain;
  private imgDomains = getEnvConfig().IMAGE_DOMAINS;
  private readonly mapKey=Vue.prototype.$globalConfig.mapKey;

  private storeId = this.$route.query.storeId || null;
  private AREA_MAP_LANGUAGE = {
    "en_US": "en",
    "ar_SA": "ar"
  };
}
</script>
<style lang="scss" scoped>
.store-detail {
  .top-page-title {
    color: var(--rcd-color-text-400);
    font-weight: var(--rcd-font-weight-medium);
    font-size: var(--rcd-font-size-20x);
    line-height: var(--rcd-line-height-30);
  }
}
</style>
