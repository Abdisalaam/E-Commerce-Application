import Component from "vue-class-component";
import {Mixins} from "vue-property-decorator";
import {CommonDomain, handleLogout, SettleDomain} from "@/service";
import {getEnvConfig} from "@/constants/envConfig";
import {ROUTES} from "@/router";
import Vue from "vue";
import {OUTER_ROUTERS} from "@/router/routerPath";

@Component
export class MiddlePageMixin extends Mixins() {
  public SettleService = SettleDomain;
  public CommonService = CommonDomain;
  public IMG_DOMAINS = getEnvConfig().IMG_DOMAINS;
  public logo =
    Vue.prototype.$globalConfig?.logoUrl ||
    require("@/assets/img/main-logo.png");
  public bannerImgUrl = require("@/assets/img/bannerImage.png");
  // 是否展示中文下拉
  public isShowZhCn = false;
  // cookie域
  public cookieDomain = Vue.prototype.$globalConfig?.outerSecondaryDomain;

  public handleSettle() {
    this.$router.push(ROUTES.APPLY_SETTLE.path);
  }
  public handleAccountManage() {
    this.$router.push({
      path: OUTER_ROUTERS.JNOS.ACCOUNT_INFO,
    });
  }

  public onHome() {
    const { origin } = window.location;
    const _loginUrl = `${getEnvConfig().LOGIN_URL}${origin}`;
    window.location.href = _loginUrl;
  }

  public toLoginPage() {
    const { origin } = window.location;
    const _loginUrl = `${getEnvConfig().LOGIN_URL}${origin}`;
    window.location.href = _loginUrl;
  }

  public logout() {
    handleLogout(window.origin);
  }
}
