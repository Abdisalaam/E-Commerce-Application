export default {
  // 登录过期/未登录状态码
  NO_LOGIN_CODE: "999999",
  // 无权限状态码
  NO_AUTH_CODE: "401",
  // 需要选择店铺
  NO_STORE_CODE: "30002",
  // 登录页
  LOGIN_PAGE: "",
  // 遮罩覆盖范围
  LOADING_SELECTOR: ".app-container-wrap",
  // 错误消息
  COMMON_ERROR_MSG: "系统错误，请您稍后重试或联系商羚客服协助解决。",
  // 公共label的宽度
  COMMON_LABEL_WIDTH: "94px",
  // 订单业务配置
  BUSI_CONFIG: require("./busi/BusiConstants"),
  // 环境配置
  getEnvConfig: require("./envConfig")
};

// 多语言cookieKey
export const COOKIE_LANG = {
  zhCN: "zh_CN",
  enUS: "en_US",
  arSA: "ar_SA"
}

// 本地默认多语言key
export const DEFAULT_LANG = COOKIE_LANG.enUS;

// 多语言cookie_key
export const LANG_COOKIE_KEY = "b2c_b_lang";
