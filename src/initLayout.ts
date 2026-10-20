import {COOKIE_LANG} from "@/constants/constants";

const rtlLang = [
  COOKIE_LANG.arSA
]

export const initHtmlLayout = (cookieLang: string) => {
  if(rtlLang.includes(cookieLang)) {
    document.documentElement.setAttribute('dir', 'rtl');
    return;
  }
  document.documentElement.setAttribute('dir', 'ltr');
}
