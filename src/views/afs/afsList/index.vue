<template>
  <div class="afs-list-container">
    <ka-afs-page
      ref="kaAfsPage"
      :afs-service="AfsService"
      :CommonService="CommonService"
      :image-domains="IMAGE_DOMAINS"
      :supportVop="supportVop"
      :btnConfig="biaopin_list"
      :map-key="mapKey"
      :default-address="defaultAddress"
      @goMissionCenter="goMissionCenter"
      @viewDetail="viewDetail"
      @viewOrderDetail="viewOrderDetail"
      @_toGoodsDetail="_toGoodsDetail"
      @goWarehouse="goWarehouse"
    >
    </ka-afs-page>
  </div>
</template>

<script lang="ts">
import {Component, Provide, Vue} from "vue-property-decorator";
import {AfsDomain, CommonDomain} from "../../../service/index";
import {ROUTES} from "@/router";
import {PageQueryResultVo} from "@Abdisalaam/b2c-be-afs-sdk-i18n/lib/vos/PageQueryVo";
import {getKaConfig} from "@/kaConfig";
import {toSkuDetail} from "@/constants/busi/BusiConstants";
import {biaopinList} from "@/constants/busi/BusiConstants";

@Component
export default class AfsList extends Vue {
  //是否展示供品方信息
  @Provide() isShowSupplierInfo = true;
  private readonly mapKey = Vue.prototype.$globalConfig.mapKey;
  private readonly defaultAddress = JSON.parse(decodeURIComponent(Vue.prototype.$globalConfig.DEFAULT_ADDRESS_EN));

  IMAGE_DOMAINS = Vue.prototype.$globalConfig?.imageDomain;
  AfsService = AfsDomain;
  CommonService = CommonDomain;
  biaopin_list = biaopinList;
  private supportVop = getKaConfig().afs.supportVop;

  goMissionCenter() {
    this.$router.push(`${ROUTES.TASK_CENTER.path}`);
  }

  viewDetail(data: any) {
    const supplierId = data.skus[0]?.supplierId
    this.$router.push(`${ROUTES.AFS_DETAIL.path}?serviceId=${data.serviceId}${supplierId ? `&supplierId=${supplierId}` : ""}`);
  }

  viewOrderDetail(data: PageQueryResultVo) {
    this.$router.push(`/orderDetail/${data.orderId}`);
  }

  // 跳转商详
  private _toGoodsDetail(skuId: string) {
    skuId && toSkuDetail(skuId);
  }

  goWarehouse() {
    setTimeout(() => {
      window.open(`${window.location.origin}/warehouseManage`, '_blank')
    })
  }
}
</script>

<style lang="scss" scoped>
.afs-list-container {
  background: var(--rcd-color-fill-white);
  padding: 24px;
  min-height: 100%;
}
</style>
