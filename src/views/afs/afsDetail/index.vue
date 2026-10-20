<template>
  <div>
    <div class="title">
      {{ i18n.t('afs.afsDetailTitle') }}
    </div>
    <ka-afs-detail
      :afs-service="AfsService"
      :image-domains="IMAGE_DOMAINS"
      :common-service="CommonService"
      :btn-config="biaopin_list"
      :map-key="mapKey"
      :default-address="defaultAddress"
      @goProductDetail="goProductDetail"
      @viewOrderDetail="viewOrderDetail"
      @goWarehouse="goWarehouse"
    />
  </div>

</template>

<script lang="ts">
import { SkuVO } from "@Abdisalaam/b2c-be-afs-sdk-i18n/lib/dtos/PageQueryDto";
import { AfsQueryDetailResultVo } from "@Abdisalaam/b2c-be-afs-sdk-i18n/lib/vos/AfsQueryDetailVo";
import { Component, Vue, Provide } from "vue-property-decorator";
import { AfsDomain, CommonDomain } from "../../../service/index";
import { biaopinList } from "@/constants/busi/BusiConstants";
import { toSkuDetail } from "@/constants/busi/BusiConstants";
import i18n from "@/lang/i18n";

@Component
export default class Test extends Vue {
  //是否展示供品方信息
  @Provide() isShowSupplierInfo = true;
  private readonly mapKey = Vue.prototype.$globalConfig.mapKey;
  private readonly defaultAddress = JSON.parse(decodeURIComponent(Vue.prototype.$globalConfig.DEFAULT_ADDRESS_EN));
  private i18n = i18n;
  AfsService = AfsDomain
  CommonService = CommonDomain
  IMAGE_DOMAINS = Vue.prototype.$globalConfig?.imageDomain
  biaopin_list = biaopinList;

  viewOrderDetail(data: AfsQueryDetailResultVo) {
    this.$router.push(`/orderDetail/${data.orderId}`)
  }

  goProductDetail(data: SkuVO) {
    data?.skuId && toSkuDetail(data.skuId);
  }

  goWarehouse() {
    setTimeout(() => {
      window.open(`${window.location.origin}/warehouseManage`, '_blank')
    })
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: var(--rcd-font-size-20x);
  line-height: var(--rcd-line-height-30);
  font-weight: var(--rcd-font-weight-bold);
  color: var(--rcd-color-text-400);
  margin-bottom: 16px;
}
</style>
