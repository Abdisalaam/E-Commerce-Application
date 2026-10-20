import Vue from "vue";

const DEV_ENV_FLAG = "development";
const PRE_ENV_FLAG = "pre";
const TEST_ENV_FLAG = "test";

const getGlobalConfig = () => {
  return {
    gatewayUrl: Vue.prototype.$globalConfig?.gatewayUrl,
    gatewayAppCode: Vue.prototype.$globalConfig?.gatewayAppCode,
    imageDomain: Vue.prototype.$globalConfig?.imageDomain,
    loginUrl: Vue.prototype.$globalConfig?.loginUrl,
    logoutUrl: Vue.prototype.$globalConfig?.logoutUrl,
    serviceUrl: Vue.prototype.$globalConfig?.serviceUrl, // 与平台聊天入口
    serviceMainUrl: Vue.prototype.$globalConfig?.serviceMainUrl, // 与C端客户聊天入口
    lotteryPageUrl: Vue.prototype.$globalConfig?.lotteryPageUrl, // 大转盘活动页
    isGetUnReadCount: Vue.prototype.$globalConfig?.isGetUnReadCount, //侧边栏客服是否展示
    settleInArticleId: Vue.prototype.$globalConfig?.agreementArticleId?.settleInArticleId, //入驻协议id
    virtualArticleId: Vue.prototype.$globalConfig?.agreementArticleId?.virtualArticleId, //开通虚户协议id
    deductionDetails: Vue.prototype.$globalConfig?.deductionDetails, //扣减详情
    payWay: Vue.prototype.$globalConfig?.payWay, // 支付方式
    lianlianEnv: Vue.prototype.$globalConfig?.lianlianEnv, // 连连环境变量
    settleProtocalText: Vue.prototype.$globalConfig?.settleProtocalText, // 入驻协议
    ossResources: Vue.prototype.$globalConfig?.ossResources,
    globalTimezone: Vue.prototype.$globalConfig?.globalTimezone,//目标KA的选择时间是按照客户国家所在时区进行选择和校验，类型是数字，3代表东三区，-3代表西三区，不设置默认使用浏览器的时区
  }
};


const MOCK_CONFIG = {
  GATEWAY_MAIN_URL: "http://Abdisalaam.Abdisalaam.sa",
  GATEWAY_PRODUCT_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/620cc514d6968554059b5303/ware",
  GATEWAY_MEDIA_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/611cb4f7fd9ddc5bd05f87d0/media",
  GATEWAY_COMMON_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/622745c142c76d0086c89e7d/common",
  GATEWAY_TASK_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/621322f031542ee768f62fc0/task",
  GATEWAY_STOCK_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/624fabab80cacb00b3ffc4d5/stock",
  GATEWAY_SHOP_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/623a8014ac5d2430b9ba8afa/vender",
  GATEWAY_ACCOUNT_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/620dbcf231542ee768f62f7b/account",
  GATEWAY_SETTLE_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/6227559542c76d0086c89e90/settle",
  GATEWAY_COUPON_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/624e935480cacb00b3ffc440/coupon",
  GATEWAY_ORDER_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/624fdce180cacb00b3ffc543/order",
  GATEWAY_PROMO_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/625520b780cacb00b3ffc613/promo",
  GATEWAY_HOME_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/624fdce180cacb00b3ffc543/order",
  GATEWAY_HELP_CENTER_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/6255293680cacb00b3ffc641/helpCenter",
  GATEWAY_CUSTOMER_RELATION_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/6164edc6699b04a9a1b3b41f/b2b-e-customerRelation",
  GATEWAY_INVOICE_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/624e9b2e80cacb00b3ffc46f/receipt",
  GATEWAY_INVOICE_MANAGE_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/6371e6169ec2da4592d3de08/jh-invoice",
  GATEWAY_SETTLEMENT_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/64780875485a1585babd988e/settlementinfo",
  GATEWAY_INVITE_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/62344449ac5d2430b9ba898e/invite",

  GATEWAY_SUBMIT_URL: "http://Abdisalaam-tbcommon.Abdisalaam.sa",
  GATEWAY_STORE_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/62c4064a51ae73ef68433b3a/store",
  GATEWAY_APP_CODE: "testApp1123",
  GATEWAY_MAIN_CODE: "b2bAbdisalaam",
  IMAGE_DOMAINS: ["https://Abdisalaam10.360buyAbdisalaam.com/Abdisalaamzone/"],
  LOGIN_URL: "//Abdisalaam.b2bgh2.Abdisalaam.sa/user/reglogin.html?source=yibinb2c&tc=b2bpoc&returnUrl=",
  LOGOUT_URL: "//Abdisalaam.b2bgh2.Abdisalaam.sa/Abdisalaam/logout?returnUrl=",
  SERVICE_URL: "",
  SERVICE_MAIN_URL: "",
  LOTTERY_PAGE_URL: "",
  PROTOCAL_ID: "",
  VIRTUAL_PROTOCAL_ID: "",
  IS_GET_UNREAD_COUNT: "",
  GATEWAY_PLUGIN_URL: "",
  GATEWAY_BARGAIN_URL: "",
  GATEWAY_ADD_PRICE_BUY_URL: "",
  GATEWAY_BUY_GIFT_URL: "",
  GATEWAY_PRESALE_URL: "",
  GATEWAY_GROUP_URL: "",
  GATEWAY_COUPON_SUBMIT_URL: "",
  GATEWAY_INVITE_NEW_CUSTOMER_AND_ORDER_URL: "",
  GATEWAY_MESSAGE_CENTER_URL: "",
  PAY_WAY: "",
  LIAN_LIAN_ENV: "",
  SETTLE_PROTOCAL_TEXT: "",
  GATEWAY_COUPON_CODE_URL: "",
  GATEWAY_COMMENT_URL:""
};


const TEST_CONFIG = {
  GATEWAY_MAIN_URL: "http://Abdisalaam.Abdisalaam.sa",
  GATEWAY_PRODUCT_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/620cc514d6968554059b5303/ware",
  GATEWAY_MEDIA_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/611cb4f7fd9ddc5bd05f87d0/media",
  GATEWAY_COMMON_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/622745c142c76d0086c89e7d/common",
  GATEWAY_TASK_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/621322f031542ee768f62fc0/task",
  GATEWAY_STOCK_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/624fabab80cacb00b3ffc4d5/stock",
  GATEWAY_SHOP_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/623a8014ac5d2430b9ba8afa/vender",
  GATEWAY_ACCOUNT_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/620dbcf231542ee768f62f7b/account",
  GATEWAY_SETTLE_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/6227559542c76d0086c89e90/settle",
  GATEWAY_COUPON_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/624e935480cacb00b3ffc440/coupon",
  GATEWAY_ORDER_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/624fdce180cacb00b3ffc543/order",
  GATEWAY_PROMO_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/625520b780cacb00b3ffc613/promo",
  GATEWAY_HOME_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/624fdce180cacb00b3ffc543/order",
  GATEWAY_HELP_CENTER_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/6255293680cacb00b3ffc641/helpCenter",
  GATEWAY_CUSTOMER_RELATION_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/6164edc6699b04a9a1b3b41f/b2b-e-customerRelation",
  GATEWAY_INVOICE_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/624e9b2e80cacb00b3ffc46f/receipt",
  GATEWAY_INVOICE_MANAGE_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/6371e6169ec2da4592d3de08/jh-invoice",
  GATEWAY_SETTLEMENT_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/64780875485a1585babd988e/settlementinfo",
  GATEWAY_INVITE_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/62344449ac5d2430b9ba898e/invite",
 
  GATEWAY_SUBMIT_URL: "http://Abdisalaam-tbcommon.Abdisalaam.sa",
  GATEWAY_STORE_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/62c4064a51ae73ef68433b3a/store",
  GATEWAY_APP_CODE: "123",
  GATEWAY_MAIN_CODE: "b2bAbdisalaam",
  IMAGE_DOMAINS: ["https://Abdisalaam10.360buyAbdisalaam.com/Abdisalaamzone/"],
  LOGIN_URL: "//Abdisalaam.b2bgh2.Abdisalaam.sa/user/reglogin.html?source=yibinb2c&tc=b2bpoc&returnUrl=",
  LOGOUT_URL: "//Abdisalaam.b2bgh2.Abdisalaam.sa/Abdisalaam/logout?returnUrl=",
  SERVICE_URL: "",
  SERVICE_MAIN_URL: "",
  LOTTERY_PAGE_URL: "",
  PROTOCAL_ID: "",
  VIRTUAL_PROTOCAL_ID: "",
  IS_GET_UNREAD_COUNT: "",
  GATEWAY_PLUGIN_URL: "",
  GATEWAY_BARGAIN_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/61946c2041dadb9167e0813b/b2c-activity",
  GATEWAY_ADD_PRICE_BUY_URL: "",
  GATEWAY_BUY_GIFT_URL: "",
  GATEWAY_PRESALE_URL: "",
  GATEWAY_GROUP_URL: "",
  GATEWAY_COUPON_SUBMIT_URL: "",
  GATEWAY_INVITE_NEW_CUSTOMER_AND_ORDER_URL: "",
  GATEWAY_MESSAGE_CENTER_URL: "",
  GATEWAY_CONTRACT_URL: "http://Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa/mock/623af35eac5d2430b9ba8b75/hetong",
  PAY_WAY: "",
  LIAN_LIAN_ENV: "",
  SETTLE_PROTOCAL_TEXT: "",
  GATEWAY_COUPON_CODE_URL: "",
  GATEWAY_COMMENT_URL:"",
  GLOBAL_TIME_ZONE:3, 
};

const PRE_CONFIG = {
  GATEWAY_MAIN_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_PRODUCT_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_MEDIA_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_COMMON_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_TASK_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_STOCK_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_SHOP_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_SETTLE_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_COUPON_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_SHIPPING_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_ACCOUNT_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_ORDER_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_APP_CODE: "b2cAbdisalaam",
  GATEWAY_PROMO_URL: "b2cAbdisalaam",
  GATEWAY_HOME_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_HELP_CENTER_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_CUSTOMER_RELATION_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_INVOICE_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_INVOICE_MANAGE_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_SETTLEMENT_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_INVITE_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_SUBMIT_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_VOP_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_STORE_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_TURNTABLE_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_MARKETING_COMMON_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  IMAGE_DOMAINS: ["//Abdisalaamdownload.Abdisalaam-test.sa/da/"],
  LOGIN_URL: "//Abdisalaam.Abdisalaam-test.sa/Abdisalaam/login?productCode=b2c&returnUrl=",
  LOGOUT_URL: "//Abdisalaam.Abdisalaam-test.sa/Abdisalaam/logout?productCode=b2c&returnUrl=",
  SERVICE_URL: "http://jtkfy.Abdisalaam-test.sa/chat/index-web.html?mallId=123940&userApp=jsl.155571.customer",
  SERVICE_MAIN_URL: "http://jtkfy.Abdisalaam-test.sa/desk/index.html",
  LOTTERY_PAGE_URL: "",
  PROTOCAL_ID: 40121,
  VIRTUAL_PROTOCAL_ID: 40121,
  IS_GET_UNREAD_COUNT: true,
  GATEWAY_PLUGIN_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_BARGAIN_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_ADD_PRICE_BUY_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_BUY_GIFT_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",

  GATEWAY_PRESALE_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_GROUP_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_COUPON_SUBMIT_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_INVITE_NEW_CUSTOMER_AND_ORDER_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_FULL_REDUCTION_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_MESSAGE_CENTER_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_CONTRACT_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  PAY_WAY: "lianlian",
  LIAN_LIAN_ENV: "production",
  SETTLE_PROTOCAL_TEXT: "《B2C商城在线服务协议》",
  GATEWAY_MESSAGE_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_COUPON_CODE_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_COMMENT_URL:"//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GLOBAL_TIME_ZONE:3, 
};

const PRODUCT_CONFIG = {
  GATEWAY_MAIN_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_PRODUCT_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_MEDIA_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_COMMON_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_TASK_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_STOCK_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_SHOP_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_SETTLE_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_COUPON_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_SHIPPING_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_ACCOUNT_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_ORDER_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_APP_CODE: "b2cAbdisalaam",
  GATEWAY_PROMO_URL: "b2cAbdisalaam",
  GATEWAY_HOME_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_HELP_CENTER_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_CUSTOMER_RELATION_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_INVOICE_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_INVOICE_MANAGE_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_SETTLEMENT_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_INVITE_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_SUBMIT_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_VOP_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_STORE_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_TURNTABLE_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_MARKETING_COMMON_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  IMAGE_DOMAINS: ["//Abdisalaamdownload.Abdisalaam-test.sa/da/"],
  LOGIN_URL: "//Abdisalaam.Abdisalaam-test.sa/Abdisalaam/login?productCode=b2c&returnUrl=",
  LOGOUT_URL: "//Abdisalaam.Abdisalaam-test.sa/Abdisalaam/logout?productCode=b2c&returnUrl=",
  SERVICE_URL: "http://jtkfy.Abdisalaam-test.sa/chat/index-web.html?mallId=123940&userApp=jsl.155571.customer",
  SERVICE_MAIN_URL: "http://jtkfy.Abdisalaam-test.sa/desk/index.html",
  LOTTERY_PAGE_URL: "",
  PROTOCAL_ID: 40121,
  VIRTUAL_PROTOCAL_ID: 40121,
  IS_GET_UNREAD_COUNT: true,
  GATEWAY_PLUGIN_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_BARGAIN_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_ADD_PRICE_BUY_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_BUY_GIFT_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_PRESALE_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_GROUP_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_COUPON_SUBMIT_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_INVITE_NEW_CUSTOMER_AND_ORDER_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_FULL_REDUCTION_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_MESSAGE_CENTER_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_CONTRACT_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  PAY_WAY: "lianlian",
  LIAN_LIAN_ENV: "production",
  SETTLE_PROTOCAL_TEXT: "《B2C商城在线服务协议》",
  GATEWAY_MESSAGE_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_COUPON_CODE_URL: "//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GATEWAY_COMMENT_URL:"//Abdisalaam-Abdisalaam-Abdisalaam.Abdisalaam-test.sa",
  GLOBAL_TIME_ZONE:3, 
};


const replaceByGlobalConfig = () => {
  const globalConfig = getGlobalConfig() || {};
  return {
    GATEWAY_MAIN_URL: globalConfig.gatewayUrl,
    GATEWAY_PRODUCT_URL: globalConfig.gatewayUrl,
    GATEWAY_MEDIA_URL: globalConfig.gatewayUrl,
    GATEWAY_COMMON_URL: globalConfig.gatewayUrl,
    GATEWAY_TASK_URL: globalConfig.gatewayUrl,
    GATEWAY_STOCK_URL: globalConfig.gatewayUrl,
    GATEWAY_SHOP_URL: globalConfig.gatewayUrl,
    GATEWAY_SETTLE_URL: globalConfig.gatewayUrl,
    GATEWAY_COUPON_URL: globalConfig.gatewayUrl,
    GATEWAY_SHIPPING_URL: globalConfig.gatewayUrl,
    GATEWAY_ACCOUNT_URL: globalConfig.gatewayUrl,
    GATEWAY_ORDER_URL: globalConfig.gatewayUrl,
    GATEWAY_APP_CODE: globalConfig.gatewayAppCode,
    GATEWAY_PROMO_URL: globalConfig.gatewayAppCode,
    GATEWAY_HOME_URL: globalConfig.gatewayUrl,
    GATEWAY_HELP_CENTER_URL: globalConfig.gatewayUrl,
    GATEWAY_CUSTOMER_RELATION_URL: globalConfig.gatewayUrl,
    GATEWAY_INVOICE_URL: globalConfig.gatewayUrl,
    GATEWAY_INVOICE_MANAGE_URL: globalConfig.gatewayUrl,
    GATEWAY_SETTLEMENT_URL: globalConfig.gatewayUrl,
    GATEWAY_INVITE_URL: globalConfig.gatewayUrl,
    GATEWAY_SUBMIT_URL: globalConfig.gatewayUrl,
    GATEWAY_VOP_URL: globalConfig.gatewayUrl,
    GATEWAY_STORE_URL: globalConfig.gatewayUrl,
    GATEWAY_TURNTABLE_URL: globalConfig.gatewayUrl,
    GATEWAY_MARKETING_COMMON_URL: globalConfig.gatewayUrl,
    IMAGE_DOMAINS: globalConfig.imageDomain,
    LOGIN_URL: globalConfig.loginUrl,
    LOGOUT_URL: globalConfig.logoutUrl,
    SERVICE_URL: globalConfig.serviceUrl,
    SERVICE_MAIN_URL: globalConfig.serviceMainUrl,
    LOTTERY_PAGE_URL: globalConfig.lotteryPageUrl,
    SETTLE_IN_ARTICLE_ID: globalConfig.settleInArticleId,
    VIRTUAL_ARTICLE_ID: globalConfig.virtualArticleId,
    IS_GET_UNREAD_COUNT: globalConfig.isGetUnReadCount,
    GATEWAY_PLUGIN_URL: globalConfig.gatewayUrl,
    GATEWAY_BARGAIN_URL: globalConfig.gatewayUrl,
    GATEWAY_ADD_PRICE_BUY_URL: globalConfig.gatewayUrl,
    GATEWAY_BUY_GIFT_URL: globalConfig.gatewayUrl,
    GATEWAY_PRESALE_URL: globalConfig.gatewayUrl,
    GATEWAY_GROUP_URL: globalConfig.gatewayUrl,
    GATEWAY_INVITE_NEW_CUSTOMER_AND_ORDER_URL: globalConfig.gatewayUrl,
    GATEWAY_FULL_REDUCTION_URL: globalConfig.gatewayUrl,
    PAY_WAY: globalConfig.payWay,
    LIAN_LIAN_ENV: globalConfig.lianlianEnv,
    SETTLE_PROTOCAL_TEXT: globalConfig.settleProtocalText,
    GATEWAY_COUPON_CODE_URL: globalConfig.gatewayUrl,
    GATEWAY_MESSAGE_CENTER_URL: globalConfig.gatewayUrl,
    GATEWAY_CONTRACT_URL: globalConfig.gatewayUrl,
    GATEWAY_COUPON_SUBMIT_URL: globalConfig.gatewayUrl,
    GATEWAY_COMMENT_URL: globalConfig.gatewayUrl,
    OSS_RESOURCES: globalConfig.ossResources,
    GLOBAL_TIME_ZONE: globalConfig.globalTimezone,
  }
}

export interface EnvConfig {
  IMAGE_DOMAINS: string | string[];
  LOGIN_URL: string;
  LOGOUT_URL: string;
  [key: string]: any;
};


const getEnvConfig = (): EnvConfig => {
  let CONFIG;
  if (process.env.VUE_APP_MODE === DEV_ENV_FLAG) {
    CONFIG = MOCK_CONFIG;
  } else if (process.env.VUE_APP_MODE === TEST_ENV_FLAG) {
    CONFIG = TEST_CONFIG;
  } else if (process.env.VUE_APP_MODE === PRE_ENV_FLAG) {
    CONFIG = Object.assign(PRE_CONFIG, replaceByGlobalConfig());
  } else {
    CONFIG = Object.assign(PRODUCT_CONFIG, replaceByGlobalConfig());
  }
  return CONFIG || {};
}

export { getEnvConfig };
