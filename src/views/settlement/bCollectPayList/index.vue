<template>
  <ka-b-collect-pay-list :SettlementService="SettlementService"
                         :imageDomains="imageDomains"
                         :actions="actions">
  </ka-b-collect-pay-list>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { InnerSettlementServiceDomain } from "../../../service";
import { BCollectPayListActions } from "@Abdisalaam/b2c-be-settlement-ui-i18n/packages/pagesComponents/bCollectPayList/type/types";
import { ROUTES } from "@/router/index";
import { getEnvConfig } from "@/constants/envConfig";

@Component
export default class BCollectPayList extends Vue {
  SettlementService = InnerSettlementServiceDomain;
  imageDomains = getEnvConfig().IMAGE_DOMAINS;
  actions: BCollectPayListActions = {
    // 去查看
    onView: (id: number) => {
      this.$router.push({
        path: ROUTES.B_COLLECT_PAY_DETAIL.path,
        query: {
          id: id.toString(),
        },
      });
    },
    onRecharge: () => {
      // this.$router.push({
      //   path: ROUTES.SETTLEMENT_ACCOUNT_MANAGE.path,
      // });
    },
  };
}
</script>
