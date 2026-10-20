<template>
  <KaVenderInfoNew
    :service="service"
    :settleService="SettleService"
    :common-service="CommonServices"
    :helpCenterService="HelpCenterService"
    :imgDomains="imageDomains"
    :actions="actions"
    :payWay="PAY_WAY"
    :lian-env="LIAN_LIAN_ENV"
    :protocalId="settleInArticleId"
    :isSelfSale="isSelfSale"
    :area-id="defaultAreaId"
    @on-renew-contract="toRenewContact"
  >
  </KaVenderInfoNew>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {CommonDomain, SettleDomain, ShopDomain, HelpCenterDomain} from "../../service/index";
import { getEnvConfig } from "@/constants/envConfig";
import { ROUTES } from "@/router";

@Component({})
export default class VenderInfo extends Vue {
  private readonly service = ShopDomain;
  private readonly SettleService = SettleDomain;
  private readonly CommonServices = CommonDomain;
  private readonly HelpCenterService = HelpCenterDomain;

  private imageDomains = getEnvConfig().IMAGE_DOMAINS;
  private PAY_WAY = getEnvConfig().PAY_WAY;
  private LIAN_LIAN_ENV = getEnvConfig().LIAN_LIAN_ENV;
  private settleInArticleId = Vue.prototype.$globalConfig?.agreementArticleId?.settleInArticleId;
  private  defaultAreaId =  Vue.prototype.$globalConfig?.defaultAreaId;
  // 判断是否是自营店
  get isSelfSale(){
    return !!Vue.prototype.$globalConfig?.venderInfo?.isSelfSale;
  }
  private actions: any = {
    toApplySettle: () => {
      setTimeout(() => {
        window.open(`${window.location.origin}/applySettle`, "_blank");
      })
    },
    // 去店铺续签页面
    toRenewContact() {
      setTimeout(() => {
        window.open(`${window.location.origin}/${ROUTES.SHOP_RENEWAL.path}`, "_blank");
      })
    },
  };
}
</script>
