<template>
  <ka-b-collect-pay-detail :SettlementService="SettlementService"
                           :imageDomains="imageDomains"
                           :actions="actions">
  </ka-b-collect-pay-detail>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { InnerSettlementServiceDomain } from "../../../service";
import { BCollectPayDetailActions } from "@Abdisalaam/b2c-be-settlement-ui-i18n/packages/pagesComponents/bCollectPayDetail/type/types";
import { ROUTES } from "@/router/index";
import { getEnvConfig } from "@/constants/envConfig";

@Component
export default class BCollectPayDetail extends Vue {
  SettlementService = InnerSettlementServiceDomain;
  imageDomains = getEnvConfig().IMAGE_DOMAINS;
  actions: BCollectPayDetailActions = {
    // 去列表
    onList: () => {
      this.$router.push({
        path: ROUTES.B_COLLECT_PAY_LIST.path,
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

