<template>
  <div class="edit-store">
    <div class="top-page-title">{{ i18n.t('store.editStore') }}</div>
    <ka-store-edit-page
      :service="StoreService"
      :common-service="CommonService"
      :img-domains="imgDomains"
      :storeGroupPath="storeGroupPath"
      :isEdit="isEdit"
      :storeId="storeId"
      :mapKey="mapKey"
      :default-address="defaultAddress"
      :language="AREA_MAP_LANGUAGE[currentLang]"
      @onSuccess="onSuccess"
      @onCancel="onCancel"
    ></ka-store-edit-page>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import {StoreDomain} from "@/service/index";
import {CommonDomain} from "@/service/index";
import {getEnvConfig} from "@/constants/envConfig";
import {ROUTES} from "@/router/index";
import i18n from "@/lang/i18n";

@Component
export default class DemoStoreEditPage extends Vue {
  private i18n = i18n;
  private StoreService = StoreDomain;
  private CommonService = CommonDomain;
  private imgDomains = getEnvConfig().IMAGE_DOMAINS;
  private storeGroupPath = ROUTES.STORE_GROUP_MANAGE.path;
  private storeId = this.$route.query.storeId || null;
  private readonly mapKey = Vue.prototype.$globalConfig.mapKey;
  private readonly defaultAddress = JSON.parse(decodeURIComponent(Vue.prototype.$globalConfig.DEFAULT_ADDRESS_EN));

  private AREA_MAP_LANGUAGE = {
    "en_US": "en",
    "ar_SA": "ar"
  };
  private isEdit = !!this.storeId;

  private onSuccess() {
    this.$router.go(-1)
  }

  private onCancel() {
    this.$router.go(-1)
  }
}
</script>
<style lang="scss" scoped>
.edit-store {
  .top-page-title {
    color: var(--rcd-color-text-400);
    font-weight: var(--rcd-font-weight-medium);
    font-size: var(--rcd-font-size-20x);
    line-height: var(--rcd-line-height-30);
    margin-bottom: 16px;
  }

  /deep/ .ka-store-edit-page {
    margin-bottom: 64px;

    .operate-box {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 0;
      width: 100%;
      z-index: 100;
      box-shadow: var(--rcd-shadow-middle);
      background: var(--rcd-color-fill-white);
    }
  }
}
</style>
