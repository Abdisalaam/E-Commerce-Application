<template>
  <KaVenderInfo
    :service="service"
    :settleService="SettleService"
    :common-services="CommonServices"
    :imgDomains="imageDomains"
    :actions="actions"
    :payWay="PAY_WAY"
    :lian-env="LIAN_LIAN_ENV"
  >
  </KaVenderInfo>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {CommonDomain, SettleDomain, ShopDomain} from "../../service/index";
import { getEnvConfig } from "@/constants/envConfig";

@Component({})
export default class VenderInfo extends Vue {
  private readonly service = ShopDomain;
  private readonly SettleService = SettleDomain;
  private readonly CommonServices = CommonDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS;
  private PAY_WAY =  getEnvConfig().PAY_WAY;
  private LIAN_LIAN_ENV = getEnvConfig().LIAN_LIAN_ENV;

  private actions: any = {
    toApplySettle: () => {
      setTimeout(() => {
        window.open(`${window.location.origin}/applySettle`, "_blank");
      })
    },
  };
}
</script>
