import i18n from "@/lang/i18n";
import zhCN from "@/lang/zh_CN/index";
import enUS from "@/lang/en_US/index";
import arSA from "@/lang/ar_SA/index";
import {COOKIE_LANG, DEFAULT_LANG} from "@/constants/constants";

let locale: any;
const getDefaultLanguageType = function (): any {
  return DEFAULT_LANG;
}

locale = getDefaultLanguageType();

const translate = function (path: any, params: any) {
  return i18n.t(path, params);
};
const init = function (localeParams?: string) {
  if (localeParams) {
    locale = localeParams;
  }
  i18n.init(locale, {
    [COOKIE_LANG.zhCN]: zhCN,
    [COOKIE_LANG.enUS]: enUS,
    [COOKIE_LANG.arSA]: arSA
  });
}

const install = function (VueObj: any, locale?: string) {
  init(locale);
  VueObj.prototype.$t = translate;
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  install
};
