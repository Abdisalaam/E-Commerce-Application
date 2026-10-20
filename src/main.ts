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

async function initTitleLang(cookieLang?: string) {
  let title = "";
 
  if (String(cookieLang) === COOKIE_LANG.enUS) {
    title = "Seller Management Backend";
  }
  if (String(cookieLang) === COOKIE_LANG.arSA) {
    title = "إدارة الأعمال الخلفية";
  }
  document.title = title;
}

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

async function initThemeVar() {
  try {
    const cssVars = await axios.get("/config-b.css");
    cssVars?.data && initCssVars(cssVars?.data);
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    initCssVars(require("../public/config-b.css"));
  }
}

async function initLang() {
  const currentLang = cookieUtil.getCookie(LANG_COOKIE_KEY) || Vue.prototype.$globalConfig?.defaultLang || DEFAULT_LANG;
  cookieUtil.setCookie(COOKIE_KEYS.CURRENCY_OBJ, Vue.prototype.$globalConfig.currencyType, Vue.prototype.$globalConfig.outerSecondaryDomain || '')
  Vue.prototype.currentLang = currentLang;
  await initTitleLang(currentLang);
  initHtmlLayout(currentLang);
  Vue.use(lang, currentLang);
  Vue.use(initRcd, currentLang);
  Vue.use(initUI, currentLang);
}

async function initConfig() {
  await initGlobalConfig();
  await initLang();
  await initThemeVar();
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

