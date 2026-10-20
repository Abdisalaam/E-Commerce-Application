<template>
  <div>
      <ka-promotion-list
        :actions="actions"
        :show-monitor="true"
        :coupon-submit-service="couponSubmitDomain"></ka-promotion-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import { CouponSubmitDomain } from "@/service";
import {PromotionListActions} from "./types";

@Component
export default class DemoPromotionList extends Vue {
  private couponSubmitDomain = CouponSubmitDomain;
  private actions: PromotionListActions = {
    toPromotionDetail: (row: any) => {
      this.$router.push({
        path: "/promotionDetail",
        query: {
          id: String(row?.id),
          processId: JSON.parse(row?.extInfo).processId
        }
      })
    },
    entryPromotion: (row: any) => {
      this.$router.push({
        path: "/promotionEntry",
        query: {
          id: String(row?.id),
          processId: JSON.parse(row?.extInfo).processId
        }
      })
    }
  }
}
</script>
