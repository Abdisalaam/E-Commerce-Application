<template>
  <ka-renew-contract
    :settle-service="SettleService"
    :contract-service="ContractService"
    :logo="logo"
    :cookieDomain="cookieDomain"
    :logo-title="$t('shopRenew.shopRenewal')"
    :pdf-src="pdfSrc"
    @to-account="handleToAccount"
    @to-home="handleToHomePage"
    @to-logout="handleToLogoutPage"
    @to-pay="handleToPayPage"
    :image-domains="IMG_DOMAINS"
  >
  </ka-renew-contract>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  ContractDomain,
  handleLogout,
  HelpCenterDomain,
  SettleDomain,
} from "@/service";
import { getEnvConfig } from "@/constants/envConfig";
import { ROUTES } from "@/router";
import { OUTER_ROUTERS } from "@/router/routerPath";
import i18n from "@/lang/i18n";

@Component
export default class RenewContract extends Vue {
  private i18n = i18n;
  private SettleService = SettleDomain;
  private ContractService = ContractDomain;
  private HelpCenterService = HelpCenterDomain;
  private IMG_DOMAINS = getEnvConfig().IMG_DOMAINS;
  private logo =
    Vue.prototype.$globalConfig?.logoUrl ||
    require("@/assets/img/main-logo.png");
  private renewArticleId = Vue.prototype.$globalConfig?.agreementArticleId?.renewArticleId;
  private pdfSrc = "";
  // cookie域
  private cookieDomain = Vue.prototype.$globalConfig?.outerSecondaryDomain;

  created() {
    this.getPdfSrc();
  }

  // 获取协议地址
  getPdfSrc() {
    this.renewArticleId &&
      this.HelpCenterService.b_detailArticle({
        sameResourceSign: String(this.renewArticleId),
      }).then((res) => {
        if (res?.attaches && res?.attaches?.length) {
          this.pdfSrc = res?.attaches?.[0]?.path || "";
        }
      });
  }

  // 跳转账号信息
  handleToAccount() {
    this.$router.push({
      path: OUTER_ROUTERS.JNOS.ACCOUNT_INFO,
    });
  }

  // 跳转首页
  handleToHomePage() {
    this.$router.push({
      path: ROUTES.HOME.path,
    });
  }

  // 退出登录
  handleToLogoutPage() {
    handleLogout();
  }

  // 跳转"跳缴费详情页"
  handleToPayPage(paymentSlipId: string) {
    if (!paymentSlipId) {
      this.$message.error(`${this.i18n.t("shopRenew.payIdErr")}`);
      return;
    }
    // this.$router.push({
    //   path: ROUTES.B_COLLECT_PAY_DETAIL.path,
    //   query: {
    //     id: paymentSlipId
    //   }
    // })
  }
}
</script>

