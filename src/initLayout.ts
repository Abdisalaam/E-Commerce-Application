import {COOKIE_LANG} from "@/constants/constants";

// 右到左布局清单
const rtlLang = [
  COOKIE_LANG.arSA
]

// 初始化布局根节点
export const initHtmlLayout = (cookieLang: string) => {
  if(rtlLang.includes(cookieLang)) {
    document.documentElement.setAttribute('dir', 'rtl');
    return;
  }
  document.documentElement.setAttribute('dir', 'ltr');
}
