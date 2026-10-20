<template>
  <div class="ka-store-stock-container">
    <div class="manage-page-title">{{i18n.t('store.inventoryManagement')}}</div>
    <ka-store-stock-manage
      :store='store'
      :service='StoreService'
    ></ka-store-stock-manage>
  </div>
</template>

<script lang="ts">
import { StoreVo } from "@Abdisalaam/b2c-be-store-sdk-i18n/lib/vos/store/StoreVo";
import Vue from "vue"
import {Component} from "vue-property-decorator"
import {StoreDomain} from "@/service/index"
import i18n from "@/lang/i18n";

@Component
export default class DemoStoreStockManage extends Vue {
  private i18n = i18n;
  private readonly StoreService = StoreDomain;
  private store: StoreVo = {
    storeId: String(this.$route.query.storeId || '' ),
    storeName: String(this.$route.query.storeName || '')
  };
}
</script>

<style lang="less" scoped>
.ka-store-stock-container {
  .manage-page-title {
    color: var(--rcd-color-text-400);
    font-weight: var(--rcd-font-weight-medium);
    font-size: var(--rcd-font-size-20x);
    line-height: var(--rcd-line-height-30);
    margin-bottom: 16px;
  }
}
</style>
