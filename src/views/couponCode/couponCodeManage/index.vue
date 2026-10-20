<template>
  <div>
      <ka-coupon-code-manage
        :coupon-code-service="CouponCodeDomain"
        :platform="'seller'"
        @addCode="addCode"
        @viewCode="viewCode"
      ></ka-coupon-code-manage>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {CouponCodeDomain} from "../../../service";

@Component
export default class DemoCouponCodeManage extends Vue {
  private CouponCodeDomain = CouponCodeDomain;
  // 查看优惠码
  private viewCode(couponCodeId: string | number) {
    this.$router.push(`/couponCode/couponCodeDetail?couponCodeId=${couponCodeId}`);
  }

  // 添加优惠码
  private addCode() {
    this.$router.push('/couponCode/couponCodeAdd');
  }
}
</script>
