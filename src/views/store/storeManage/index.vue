<template>
  <div>
      <ka-store-manage
      :service="StoreService"
      :commonService="CommonService"
      :actionUrl="`${$globalConfig.gatewayUrl}/fastc/common/file/upload?apiCode=${$globalConfig.gatewayAppCode}.fastc.common.file.upload`"
      @toAddStore="toAddStore"
      @toEditStore="toEditStore"
      @toStoreDetail="toStoreDetail"
      @toStoreStock="toStoreStock"
      @toExportTask="toExportTask"
      ></ka-store-manage>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {StoreDomain} from "@/service/index";
import {CommonDomain} from "@/service/index";
import {ROUTES} from "@/router/index";
import { StoreVo } from '@Abdisalaam/b2c-be-order-sdk-i18n/lib/vos/store/StoreVo';

@Component
export default class DemoStoreManage extends Vue {
  private StoreService = StoreDomain
  private CommonService = CommonDomain

  toAddStore() {
    // this.$message('toAddStore')
    // this.$router.push('/storeEditPage')
    this.$router.push({
      path: ROUTES.STORE_ADD.path
    })
  }
  toEditStore(storeId: string) {
    // this.$message('toEditStore'+storeId)
    // this.$router.push(`/storeEditPage?storeId=${storeId}`)
    this.$router.push({
      path: ROUTES.STORE_EDIT.path,
      query: {
        storeId: storeId
      }
    })
  }
  toStoreDetail(storeId: string) {
    // this.$message('toStoreDetail'+ storeId)
    // this.$router.push(`/storeDetailPage?storeId=${storeId}`)
    this.$router.push({
      path: ROUTES.STORE_DETAIL.path,
      query: {
        storeId: storeId
      }
    })
  }
  toStoreStock(storeVo: StoreVo) {
    // this.$message('toStoreStock'+storeVo)
    // this.$router.push('/storeStockManage')
    this.$router.push({
      name: ROUTES.STORE_STOCK_MANAGE.name,
      query: {
        storeId: storeVo.storeId || '',
        storeName: storeVo.storeName || ''
      }
    })
  }
  toExportTask() {
    this.$router.push({
      path: ROUTES.TASK_CENTER.path
    })
  }
}
</script>
