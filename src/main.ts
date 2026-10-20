import Vue from "vue";
import App from "@/App.vue";
import router from './router';
import { initCssVars, initLinkIcon } from "@/common/utils/cssVarUtil";
import initRcd from "@/initRcd";
import initUI from "@/initUI";
// @ts-ignore
import lang from "@/lang/index";
import axios from "axios";
import {COOKIE_LANG, DEFAULT_LANG, LANG_COOKIE_KEY} from "@/constants/constants";
import {initHtmlLayout} from "@/initLayout";
import {COOKIE_KEYS} from "@Abdisalaam/kapaas-common-sdk/lib/config/CookieKeys"
import {cookieUtil} from "@Abdisalaam/kapaas-common-sdk/lib/utils/cookieUtil";
import {initFirebaseReporter} from "@/common/reporter/firebaseReporter";


Vue.config.productionTip = false;
// Vue.config.devtools = true

// 根据lang获取title多语言
async function initTitleLang(cookieLang?: string) {
  let title = "";
  if (String(cookieLang) === COOKIE_LANG.zhCN) {
    title = "商家管理后台";
  }
  if (String(cookieLang) === COOKIE_LANG.enUS) {
    title = "Seller Management Backend";
  }
  if (String(cookieLang) === COOKIE_LANG.arSA) {
    title = "إدارة الأعمال الخلفية";
  }
  document.title = title;
}

// 初始化固化全局配置
async function initGlobalConfig() {
  try {
    const configUrl =
      process.env.VUE_APP_KA && process.env.VUE_APP_RUNMODE === "start"
        ? `/localStart/${process.env.VUE_APP_KA}.json`
        : "/config.json";
    const config = await axios.get(configUrl);
    Vue.prototype.$globalConfig = config?.data || {};
    initLinkIcon(config?.data?.iconUrl || require("../src/assets/img/icon.png"));
  } catch (e) {
    console.error("init config.json err", e);
    Vue.prototype.$globalConfig = require("../public/config.json");
    if (
      Vue.prototype.$globalConfig &&
      Vue.prototype.$globalConfig?.iconUrl
    ) {
      initLinkIcon(Vue.prototype.$globalConfig.iconUrl || require("../src/assets/img/icon.png"));
    }
  }
}

// 初始化全局CSS样式
async function initThemeVar() {
  try {
    const cssVars = await axios.get("/config-b.css");
    cssVars?.data && initCssVars(cssVars?.data);
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    initCssVars(require("../public/config-b.css"));
  }
}

// 初始化多语言（主工程多语言、RCD多语言、UI组件多语言）
async function initLang() {
  // 根据cookie中的语言设置当前i18n语言环境,默认中文
  const currentLang = cookieUtil.getCookie(LANG_COOKIE_KEY) || Vue.prototype.$globalConfig?.defaultLang || DEFAULT_LANG;
  // 设置全局的币种
  cookieUtil.setCookie(COOKIE_KEYS.CURRENCY_OBJ, Vue.prototype.$globalConfig.currencyType, Vue.prototype.$globalConfig.outerSecondaryDomain || '')
  // 全局语言
  Vue.prototype.currentLang = currentLang;
  // 初始化主工程页签title多语言
  await initTitleLang(currentLang);
  // 初始化布局
  initHtmlLayout(currentLang);
  // 初始化主工程i18n
  Vue.use(lang, currentLang);
  // 初始化RCD多语言
  Vue.use(initRcd, currentLang);
  // 初始化UI组件多语言
  Vue.use(initUI, currentLang);
}

// 初始化
async function initConfig() {
  // 1、初始化全局配置，并注册到Vue.prototype.$globalConfig
  await initGlobalConfig();
  // 2、初始化多语言配置（包括：初始化布局、主工程多语言、RCD组件库多语言、UI组件多语言）
  await initLang();
  // 3、初始化设计变量 (包括: 全局设计变量)
  await initThemeVar();
  // 4、初始化firebase
  initFirebaseReporter()
}

function render() {
  initConfig().then(() => {
    new Vue({
      router,
      render: (h: any) => h(App),
    }).$mount("#app");
  });
}

render();

