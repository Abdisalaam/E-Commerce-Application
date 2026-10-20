export default {

  NO_LOGIN_CODE: "999999",

  NO_AUTH_CODE: "401",

  NO_STORE_CODE: "30002",

  LOGIN_PAGE: "",

  LOADING_SELECTOR: ".app-container-wrap",

  COMMON_ERROR_MSG: "系统错误，请您稍后重试或联系商羚客服协助解决。",

  COMMON_LABEL_WIDTH: "94px",

  BUSI_CONFIG: require("./busi/BusiConstants"),

  getEnvConfig: require("./envConfig")
};


export const COOKIE_LANG = {
  zhCN: "zh_CN",
  enUS: "en_US",
  arSA: "ar_SA"
}


export const DEFAULT_LANG = COOKIE_LANG.enUS;


export const LANG_COOKIE_KEY = "b2c_b_lang";
