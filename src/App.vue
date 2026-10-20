<template>
  <ka-rcd-menu
    v-if="(!$route.meta || !$route.meta.hideFrame) && menuFlag"
    class="b2c-menu-wrap"
    :configs="configs"
    :hooks="menuHooks"
  >
    <template #userInfoPopover>
      <div class="btn" @click="toAccountInfo">{{$t('appLang.accountManagement')}}</div>
    </template>
    <template #rightContent>
      <div class="language-select-wrap">
        <el-dropdown @command="handleSelectLanguage">
          <span>{{ languageShortName }}<i class="ext-icon-down"></i></span>
          <el-dropdown-menu slot="dropdown" style="width :116px" :visible-arrow="false" class="app-language-select-wrap-drop">
            <el-dropdown-item :command="COOKIE_LANG.enUS">
              <div :class="{active: isLangActive(COOKIE_LANG.enUS)}">{{ $t('main.enUS') }}</div>
            </el-dropdown-item>
            <el-dropdown-item :command="COOKIE_LANG.arSA">
              <div :class="{active: isLangActive(COOKIE_LANG.arSA)}">{{ $t('main.arSA') }}</div>
            </el-dropdown-item>
          
          </el-dropdown-menu>
        </el-dropdown>
      </div>
<!--      <span class="msg-container" @click="toService">-->
<!--        <i class="ext-icon-notification"></i>-->
<!--        <span class="total" v-if="unreadCount !== '0'" :class="unreadClass">{{-->
<!--          unreadCount-->
<!--        }}</span>-->
<!--      </span>-->
    </template>
    <template #mainMenuItem="{data}">
      <div class="main-menu-ext" v-if="(unreadMsgCount !== '0') && data.menuCode === 'MESSAGE'" :class="unreadMsgClass">{{unreadMsgCount}}</div>
    </template>
  </ka-rcd-menu>
  <div v-else-if="$route.meta.hideFrame" style="height:100%">
    <div style="height:100%">
    <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Configs, Hooks } from "@zode/b2c-main-ui-i18n/packages/types/menu";
import { LayoutType } from "@zode/b2c-main-ui-i18n/packages/constants/common";
import { KaRcdMenu } from "@zode/b2c-main-ui-i18n";
import { OUTER_ROUTERS } from "@/router/routerPath";
import { ROUTES } from "@/router";
import { getKaConfig } from "@/kaConfig";
import {COOKIE_LANG, DEFAULT_LANG, LANG_COOKIE_KEY} from "@/constants/constants";
import {cookieUtil} from "@zode/kapaas-common-sdk/lib/utils/cookieUtil";
import {VenderBaseInfoVo} from "@zode/b2c-be-shop-sdk-i18n/lib/vos/base/VenderBaseInfoVo";
import {SELLER_TYPE, SHOP_STATUS} from "@/constants/busi/BusiConstants";

export interface VenderInfo extends VenderBaseInfoVo {
  isSelfSale: boolean; 
  isPop: boolean; 
  isShopClosed: boolean; 
}

@Component({
  components: {
    KaRcdMenu,
  },
})
export default class Index extends Vue {
  data: any = [];
  configs: Configs = {
    MainService: require("./service/index").MainDomain,
    defaultPath: getKaConfig().main.isSetDefaultPage ? ROUTES.HOME.path : "",
    layout: LayoutType.SIDE,
    maxTabNum: 3,
    logout: this.logout,
    apiParams: {
      queryDict: { code: getKaConfig().main.microDictCode },
    },
    logo: this.getLogo(),
    // 获取下发到子应用的配置
    CONSTANTS: this.getConstantsToSubApp(),
  };

  private unreadCount = "0";
  private unreadClass = "";
  private unreadMsgCount = "0";
  private unreadMsgClass = "";
  private timer: any;
  private MessageCenterDomain = require("./service/index").MessageCenterDomain;
  private ShopDomain = require("./service/index").ShopDomain;
  private cookieLang = Vue.prototype.$globalConfig?.defaultLang;
  private COOKIE_LANG = COOKIE_LANG;
  private menuHooks: Hooks = {
    afterGettingMenu: this.afterGettingMenu
  }
  menuFlag = false;

  get languageShortName () {
    if (this.cookieLang === COOKIE_LANG.arSA) {
      return (this as any).$t('main.arSAShort');
    }
    return (this as any).$t('main.enUsShort');
  }

  created() {
    this.cookieLang = cookieUtil.getCookie(LANG_COOKIE_KEY) || Vue.prototype.$globalConfig?.defaultLang || DEFAULT_LANG;
    cookieUtil.setCookie(LANG_COOKIE_KEY, this.cookieLang, Vue.prototype.$globalConfig.outerSecondaryDomain || '');
    setTimeout(() => {
      this.menuFlag = true;
    }, 300);
  }

  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }

  async afterGettingMenu() {
    await this.getVenderBaseInfo();
    this.getMessageCenterMsg();
    this.getMessage();
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.timer = setInterval(() => {
      setTimeout(()=>{
        this.getMessageCenterMsg();
        this.getMessage();
      }, 0)
    }, 60 * 1000);
  }

  handleSelectLanguage(lang: string) {
    if (this.isLangActive(lang)) {
      return;
    }
    this.cookieLang = lang;
    this.$nextTick(() => {
      cookieUtil.setCookie(LANG_COOKIE_KEY, this.cookieLang, Vue.prototype.$globalConfig.outerSecondaryDomain || '');
      document.location.reload();
    });
  }

  isLangActive(lang: string) {
    return lang === this.cookieLang;
  }

  async getVenderBaseInfo() {
    try {
      const venderInfo = await this.ShopDomain.getVenderBaseInfo();
      Vue.prototype.$globalConfig.venderInfo = {
        ...venderInfo || {},
        isShopClosed: String(venderInfo?.shopStatus) === String(SHOP_STATUS.STOP), // 是否已关店
        isPop: String(venderInfo?.sellerType) === String(SELLER_TYPE.POP), // 是否POP商家
        isSelfSale: String(venderInfo?.sellerType) === String(SELLER_TYPE.SELF_SALE) // 是否自营商家
      } as VenderInfo;
    } catch (e) {
      Vue.prototype.$globalConfig.venderInfo = {}
      console.log("getVenderBaseInfo failed->", e);
    }
  }

 
  async getMessageCenterMsg() {
    let num = 0;
    num = await this.MessageCenterDomain.getMsgEntrance();
    if (num < 10) {
      this.unreadMsgClass = "single";
    }
    if (num < 100) {
      this.unreadMsgCount = String(num || 0);
    } else {
      this.unreadMsgCount = "99+";
    }
  }

  async getMessage() {
    let num = 0;
    num = await this.MessageCenterDomain.queryServiceReceptionUnreadMsg();
    if (num < 10) {
      this.unreadClass = "single";
    }
    if (num < 100) {
      this.unreadCount = String(num || 0);
    } else {
      this.unreadCount = "99+";
    }
  }

  logout() {
    const handleLogout = require("./service/index").handleLogout;
    handleLogout();
  }

  login(redirectUrl: string) {
    const handleLogin = require("./service/index").handleLogin;
    handleLogin(redirectUrl);
  }

  getLogo() {
    if (Vue.prototype.$globalConfig?.logoUrl) {
      return Vue.prototype.$globalConfig?.logoUrl;
    }
    return require("@/assets/img/main-logo.png");
  }

  getConstantsToSubApp() {
    const origin = window.location.origin
      ? window.location.origin
      : window.location.protocol + "//" + window.location.hostname;
    const ext = {
      logoutMethod: this.logout,
      loginMethod: this.login,
      noAuthPage: origin + ROUTES.NO_AUTH_PAGE.path,
      notVenderPage: origin + ROUTES.WAIT_SETTLE.path,
      settleIngPage: origin + ROUTES.APPLY_SETTLE.path,
      language: this.cookieLang
    };
    if (
      Vue.prototype.$globalConfig &&
      typeof Vue.prototype.$globalConfig === "object"
    ) {
      return {
        ...ext,
        ...Vue.prototype.$globalConfig,
      };
    }
    return ext;
  }

  toAccountInfo() {
    this.$router.push({
      path: OUTER_ROUTERS.JNOS.ACCOUNT_INFO,
    });
  }
  // mounted() {
  //   window.onbeforeunload = () => {
  //     return true;
  //   }
  // }

  toService() {
    setTimeout(() => {
      window.open(Vue.prototype.$globalConfig?.serviceMainUrl, "_blank");
    })
  }

  changeLang() {
    this.$nextTick(() => {
      cookieUtil.setCookie(LANG_COOKIE_KEY, this.cookieLang, Vue.prototype.$globalConfig.outerSecondaryDomain || '');
      document.location.reload();
    });
  }
}
</script>
<style lang="scss" scoped>
.language-select-wrap {
  line-height: var(--rcd-line-height-22);
  font-size: var(--rcd-font-size-14x);
  .ext-icon-down {
    margin-left: 8px;
    font-size: var(--rcd-font-size-14x);
  }
  .el-dropdown {
    font-size: var(--rcd-font-size-14x);
  }
}
.app-language-select-wrap-drop {
  .el-dropdown-menu__item {
    .active {
      color: var(--rcd-color-brand-normal);
    }
  }
}
.message {
  cursor: pointer;
  margin-right: 16px;
  ::v-deep .el-badge {
    line-height: 1;
  }
  .message-icon {
    font-size: 20px;
    color: var(--rcd-color-text-300);
  }
}

.msg-container {
  width: 80px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  .ext-icon-notification {
    font-size: 16px;
  }

  .total {
    position: absolute;
    left: 40px;
    top: 5px;
    padding: 0 5px;
    font-size: 12px;
    line-height: 18px;
    background: var(--rcd-color-error-normal);
    color: var(--rcd-color-text-white);
    border-radius: 9px;
  }

  .single {
    width: 18px;
    text-align: center;
  }
}

.main-menu-ext {
  position: absolute;
  left: 54px;
  top: 3px;
  padding: 0 5px;
  font-size: 12px;
  line-height: 18px;
  background: var(--rcd-color-error-normal);
  color: var(--rcd-color-text-white);
  border-radius: 9px;
}
</style>
