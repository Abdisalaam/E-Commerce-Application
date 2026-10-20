<template>
  <div>
    <div class="title">
      {{i18n.t('afs.cancelOrderDetailTitle')}}
    </div>
    <KaCancelOrderDetail
      :data="data"
      :afs-service="AfsService"
      :image-domains="IMAGE_DOMAINS"
      @viewOrderDetail="viewOrderDetail"
      :common-service="CommonService"/>
  </div>
</template>

<script lang="ts">
import { CancelOrderDetailResultVo } from '@Abdisalaam/b2c-be-afs-sdk-i18n/lib/vos/CancelOrderDetailDto';
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import { AfsDomain, CommonDomain } from "../../../service/index";
import i18n from "@/lang/i18n";

@Component
export default class CancelOrderDetail extends Vue {
  private i18n = i18n;
  data: any = {}
  AfsService = AfsDomain
  CommonService = CommonDomain
  IMAGE_DOMAINS = Vue.prototype.$globalConfig?.imageDomain

  viewOrderDetail(data: CancelOrderDetailResultVo) {
    setTimeout(() => {
      window.open(`${window.location.origin}/orderDetail/${data.orderId}`, '_blank')
    })
  }
}
</script>
<style lang="scss" scoped>
.title {
  font-size: var(--rcd-font-size-20x);
  line-height: var(--rcd-line-height-30);
  font-weight: var(--rcd-font-weight-bold);
  margin-bottom: 16px;
  color: var(--rcd-color-text-400);
}
</style>
