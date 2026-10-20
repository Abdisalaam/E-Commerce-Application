import RCD from "@Abdisalaam/rcd";
import "@/assets/style/index.scss";
import "@Abdisalaam/rcd/packages/theme-chalk/src/index.scss";
import {COOKIE_LANG} from "@/constants/constants";

//@ts-ignore
import rcdLangEn from "@Abdisalaam/rcd/lib/locale/lang/en";
//@ts-ignore
import rcdLangZhCN from "@Abdisalaam/rcd/lib/locale/lang/zh-CN";
//@ts-ignore
import rcdLangArAE from "@Abdisalaam/rcd/lib/locale/lang/ar";

const getRcdLocale = (cookieLang?: string) => {
  switch (cookieLang) {
    case COOKIE_LANG.enUS:
      return rcdLangEn;
      break;
    case COOKIE_LANG.zhCN:
      return rcdLangZhCN;
      break;
    case COOKIE_LANG.arSA:
      return rcdLangArAE;
      break;
    default:
      return rcdLangZhCN;
  }
}

const install = function (VueObj: any, cookieLang?: string) {
  VueObj.use(RCD, {
    size: "small",
    locale: getRcdLocale(cookieLang)
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  install
};
