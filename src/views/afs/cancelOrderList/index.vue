<template>
  <div class="cancel-order-container">
    <KaCancelOrder
      :image-domains="IMAGE_DOMAINS"
      :AfsService="AfsService"
      @viewOrderDetail="viewOrderDetail"
      @viewDetail="viewDetail"
      @goMissionCenter="goMissionCenter"
    />
  </div>
</template>

<script lang="ts">
import { CancelOrderPageQueryResultVo } from '@Abdisalaam/b2c-be-afs-sdk-i18n/lib/vos/CancelOrderPageQueryVo';
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import { AfsDomain } from "../../../service/index";
import { ROUTES } from '@/router';
@Component
export default class CancelOrderList extends Vue {
  AfsService = AfsDomain
  IMAGE_DOMAINS = Vue.prototype.$globalConfig?.imageDomain

  viewDetail(data: CancelOrderPageQueryResultVo) {
    this.$router.push(`${ROUTES.CANCEL_ORDER_DETAIL.path}?applyId=${data.applyId}`);
  }

  viewOrderDetail(data: CancelOrderPageQueryResultVo) {
    setTimeout(() => {
      window.open(`${window.location.origin}/orderDetail/${data.orderId}`, '_blank')
    })
  }

  // 跳转任务中心
  goMissionCenter() {
    this.$router.push(`${ROUTES.TASK_CENTER.path}`);
  }
}
</script>
<style lang="scss" scoped>
.cancel-order-container {
  background: var(--rcd-color-fill-white);
  padding: 24px;
}
</style>
