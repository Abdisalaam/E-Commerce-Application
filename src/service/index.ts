import Vue from "vue";
import { RequestWeb } from "@Abdisalaam/kapaas-common-sdk/lib/request/request.web";
import { ResVo } from "@Abdisalaam/kapaas-common-sdk/lib/vos/ResVo";
import { MainService } from "@Abdisalaam/b2c-be-main-sdk-i18n/lib/services";
import { getEnvConfig } from "@/constants/envConfig";
import { BeConfig } from "@Abdisalaam/kapaas-common-sdk/lib/config/BeConfig";
import { ProductService } from "@Abdisalaam/b2c-be-product-sdk-i18n/lib/services";
import { CommonService } from "@Abdisalaam/b2c-be-common-sdk-i18n/lib/services";
import { CommonService as CommonServiceI18n } from "@Abdisalaam/b2c-be-common-sdk-i18n/lib/services";
import { MediaService } from "@Abdisalaam/b2c-b-media-sdk-i18n/lib/services";
import { TaskService } from "@Abdisalaam/b2c-be-task-sdk-i18n/lib/services/TaskService";
import { StockService } from "@Abdisalaam/b2c-be-stock-sdk-i18n/lib/services";
import { ShopService } from "@Abdisalaam/b2c-be-shop-sdk-i18n/lib/services/index";
import { SettleService } from "@Abdisalaam/b2c-be-shop-settle-sdk-i18n/lib/services";
import { AfsService } from "@Abdisalaam/b2c-be-afs-sdk-i18n/lib/services";

import { ROUTES } from "@/router";
import { CouponService } from "@Abdisalaam/b2c-be-coupon-sdk-i18n/lib/services";
import { ShippingService } from "@Abdisalaam/b2c-be-shipping-sdk-i18n/lib/services";
import { AccountService } from "@Abdisalaam/b2c-be-account-sdk-i18n/lib/services/index";
import { OrderService } from "@Abdisalaam/b2c-be-order-sdk-i18n/lib/services";
import { PromoService } from "@Abdisalaam/b2c-be-promotion-sdk-i18n/lib/services";
import { HomeService } from "@Abdisalaam/b2c-be-home-sdk-i18n/lib/services";
import { HelpCenterService } from "@Abdisalaam/b2c-be-help-center-sdk-i18n/lib/services";
import { InvoiceService } from "@Abdisalaam/b2c-be-invoice-sdk-v3/lib/services/InvoiceService";
import { SettlementService as InnerSettlementService } from "@Abdisalaam/b2c-be-settlement-sdk-i18n/lib/services";
import { InviteService } from "@Abdisalaam/b2c-be-invite-sdk-i18n/lib/services";
import { SubmitService } from "@Abdisalaam/b2c-be-submit-sdk-i18n/lib/services/index";

import { StoreService } from "@Abdisalaam/b2c-be-store-sdk-i18n/lib/services/index";
import { LotteryService } from "@Abdisalaam/b2c-be-turnable-sdk-i18n/lib/services";
import { MarketingCommonService } from "@Abdisalaam/ka-b2c-marketing-common-sdk/lib/services/index";
import { PluginService } from "@Abdisalaam/b2c-be-service-plugin-sdk-i18n/lib/services/index"
import { BargainService } from "@Abdisalaam/b2c-be-bargain-sdk-i18n/lib/services";
import { BuyGiftService } from "@Abdisalaam/b2c-be-buygift-sdk-i18n/lib/services/index";
import { PresaleService } from "@Abdisalaam/b2c-be-presale-sdk-i18n/lib/services/index";
import { GroupService } from "@Abdisalaam/b2c-be-group-sdk-i18n/lib/services/index";
import { FullReductionService } from "@Abdisalaam/b2c-be-full-reduction-sdk-i18n/lib/services/index";
import { MessageCenterService } from "@Abdisalaam/b2c-b-mc-sdk-i18n/lib/services";
import { ContractService } from "@Abdisalaam/b2c-be-contract-sdk-i18n/lib/services/index";
import { CouponCodeService } from "@Abdisalaam/b2c-be-coupon-code-sdk-i18n/lib/services/index";
import { CouponSubmitService } from "@Abdisalaam/b2c-b-coupon-submit-sdk-i18n/lib/services/index";
import {SettlementService} from "@Abdisalaam/ksa-be-settlement-sdk-i18n/lib/services/index"
import i18n from "../lang/i18n";

import { SGM_API_CODE, apiLog } from "@/common/utils/sgm";
import {CommentService} from "@Abdisalaam/b2c-be-comment-sdk-i18n/lib/services";
const API_STATUS = {
  NOT_LOGIN: ["504", "507", "1001"], 
  NO_AUTH: ["502", "1003", "401"], 
  NOT_SELLER_OR_SUPPLIER_ACCOUNT: ["1999", "508"], 
  SELLER_SETTLE_IN_ING: ["1998"], 
  SELLER_OPEN_STORE: ["1801"], 
  SELLER_ZY_SETTLE_IN_ING: ["1803"], 
  SUPPLIER_ZY_SETTLE_IN_ING: ["1997"], 
  SUPPLIER_SETTLE_IN_ING: ["2000"], 
  HAS_BEEN_A_SELLER: ["1995"], 
  HAS_BEEN_A_SUPPLIER: ["1996"], 
};

export function handleLogin(redirectUrl?: string) {
  const { href } = window.location;
  const url = redirectUrl ? redirectUrl : href;
  const _loginUrl = `${getEnvConfig().LOGIN_URL}${encodeURIComponent(url)}`;
  window.location.href = _loginUrl;
}

export function handleLogout(redirectUrl?: string) {
  const reg = /^(http[s]?:)?\/\//;
  const _logoutUrl = Vue.prototype.$globalConfig?.logoutUrl;
  if (_logoutUrl) {
    const { href } = window.location; // logout的redirectUrl
    const url = _logoutUrl.replace(reg, "");
    window.location.href = `${window.location.protocol}//${url}${encodeURIComponent(redirectUrl || href)}`;
  }
}

/**
 */
function redirectByCode(resVo: ResVo): any {
  const res = resVo?.data;
  if (res) {
    if (res?.success === true || res?.result === true) {
      return resVo;
    }

    if (res?.isFromGateway) {
      res.msg = i18n.t(`commonErrorMsg`);
    }

    if (
      !(res?.success || res?.result) &&
      API_STATUS.NOT_LOGIN.includes(String(res?.code))
    ) {
      handleLogin();
    }
    if (!(res?.success || res?.result) && res.code) {
      let path = "";
      if (API_STATUS.NO_AUTH.includes(String(res.code))) {
        path = ROUTES.NO_AUTH_PAGE.path;
      }
      if (API_STATUS.NOT_SELLER_OR_SUPPLIER_ACCOUNT.includes(String(res.code))) {
        path = ROUTES.WAIT_SETTLE.path;
      }
      if (API_STATUS.SELLER_ZY_SETTLE_IN_ING.includes(String(res.code))) {
        path = ROUTES.ZY_SETTLE_IN_ING.path;
      }
      if (API_STATUS.SUPPLIER_ZY_SETTLE_IN_ING.includes(String(res.code))
        || API_STATUS.SUPPLIER_SETTLE_IN_ING.includes(String(res.code))) {
        path = ROUTES.SUPPLIER_SETTLE_IN_ING.path;
      }
      if (API_STATUS.HAS_BEEN_A_SUPPLIER.includes(String(res.code))) {
        path = ROUTES.HAS_BEEN_A_SUPPLIER.path;
      }
      if (
        API_STATUS.SELLER_SETTLE_IN_ING.includes(String(res.code)) ||
        API_STATUS.SELLER_OPEN_STORE.includes(String(res.code))
      ) {
        path = ROUTES.APPLY_SETTLE.path;
      }
      if (path) {
        if (
          window.location.pathname === path) {
          return "";
        }
        //@ts-ignore
        window.top.location.href = path;
      }
    }
  }
  try {
    window && (window as any).handleErrInfoReport && typeof (window as any).handleErrInfoReport === 'function' &&
      (window as any).handleErrInfoReport(resVo, SGM_API_CODE)
  } catch (e) {
    console.log(e)
  }
  return resVo;
}

function interceptorsResponse(data: any) {
  return redirectByCode(data);
}

function errorInterceptorsResponse(data: any) {
  console.log("errorInterceptorsResponse", data);
  return data?.response && redirectByCode(data?.response);
}
const request = new RequestWeb(interceptorsResponse, errorInterceptorsResponse)
  .request;

(window as any).handleErrInfoReport = (response: any, sgmCode: any) => {
  if (response && response.status && response.config && response.config.url &&
    sgmCode && Object.prototype.toString.call(sgmCode) === '[object Object]' && Object.keys(sgmCode).length) {
    Object.keys(sgmCode).forEach((level: string) => {
      if (level && sgmCode[level] && Object.prototype.toString.call(sgmCode[level]) === '[object Object]' && Object.keys(sgmCode[level]).length) {
        apiLog(response, sgmCode[level], level);
      }
    })
  }
}

const mainConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_MAIN_URL,
  gatewayAppCode:
    Vue.prototype.$globalConfig?.gatewayAppCodeMap?.main ||
    getEnvConfig().GATEWAY_APP_CODE,
};
const productConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_PRODUCT_URL,
  gatewayAppCode:
    Vue.prototype.$globalConfig?.gatewayAppCodeMap?.product ||
    getEnvConfig().GATEWAY_APP_CODE,
};
const commonConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_COMMON_URL,
  gatewayAppCode:
    Vue.prototype.$globalConfig?.gatewayAppCodeMap?.common ||
    getEnvConfig().GATEWAY_APP_CODE,
};
const mediaConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_MEDIA_URL,
  gatewayAppCode:
    Vue.prototype.$globalConfig?.gatewayAppCodeMap?.media ||
    getEnvConfig().GATEWAY_APP_CODE,
};
const taskConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_TASK_URL,
  gatewayAppCode:
    Vue.prototype.$globalConfig?.gatewayAppCodeMap?.task ||
    getEnvConfig().GATEWAY_APP_CODE,
};
const stockConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_STOCK_URL,
  gatewayAppCode:
    Vue.prototype.$globalConfig?.gatewayAppCodeMap?.stock ||
    getEnvConfig().GATEWAY_APP_CODE,
};
const wareStockConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_PRODUCT_URL,
  gatewayAppCode:
    Vue.prototype.$globalConfig?.gatewayAppCodeMap?.product ||
    getEnvConfig().GATEWAY_APP_CODE,
};
const shopConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_SHOP_URL,
  gatewayAppCode:
    Vue.prototype.$globalConfig?.gatewayAppCodeMap?.shop ||
    getEnvConfig().GATEWAY_APP_CODE,
};
const settleConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_TASK_URL,
  gatewayAppCode:
    Vue.prototype.$globalConfig?.gatewayAppCodeMap?.settle ||
    getEnvConfig().GATEWAY_APP_CODE,
};

const couponConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_COUPON_URL,
  gatewayAppCode:
    Vue.prototype.$globalConfig?.gatewayAppCodeMap?.coupon ||
    getEnvConfig().GATEWAY_APP_CODE,
};

const shippingConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_SHIPPING_URL,
  gatewayAppCode:
    Vue.prototype.$globalConfig?.gatewayAppCodeMap?.shipping ||
    getEnvConfig().GATEWAY_APP_CODE,
};

const accountConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_ACCOUNT_URL,
  gatewayAppCode:
    Vue.prototype.$globalConfig?.gatewayAppCodeMap?.account ||
    getEnvConfig().GATEWAY_APP_CODE,
};
const orderConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_ORDER_URL,
  gatewayAppCode:
    Vue.prototype.$globalConfig?.gatewayAppCodeMap?.order ||
    getEnvConfig().GATEWAY_APP_CODE,
};
const afsConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_ORDER_URL,
  gatewayAppCode:
    Vue.prototype.$globalConfig?.gatewayAppCodeMap?.afs ||
    getEnvConfig().GATEWAY_APP_CODE,
};

const promoConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_SHIPPING_URL,
  gatewayAppCode:
    Vue.prototype.$globalConfig?.gatewayAppCodeMap?.promo ||
    getEnvConfig().GATEWAY_APP_CODE,
};

const homeConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_HOME_URL,
  gatewayAppCode:
    Vue.prototype.$globalConfig?.gatewayAppCodeMap?.home ||
    getEnvConfig().GATEWAY_APP_CODE,
};

const helpCenterConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_HELP_CENTER_URL,
  gatewayAppCode:
    Vue.prototype.$globalConfig?.gatewayAppCodeMap?.helpCenter ||
    getEnvConfig().GATEWAY_APP_CODE,
};

const InvoiceConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_INVOICE_URL,
  gatewayAppCode: Vue.prototype.$globalConfig?.gatewayAppCodeMap?.invoice || getEnvConfig().GATEWAY_APP_CODE,
};

const settlementConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_SETTLEMENT_URL,
  gatewayAppCode: getEnvConfig().GATEWAY_APP_CODE,
  // gatewayAppCode: Vue.prototype.$globalConfig?.gatewayAppCodeMap?.settlement || getEnvConfig().GATEWAY_APP_CODE,
};

const InviteConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_INVITE_URL,
  gatewayAppCode:
    Vue.prototype.$globalConfig?.gatewayAppCodeMap?.invite ||
    getEnvConfig().GATEWAY_APP_CODE,
};

const SubmitConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_SUBMIT_URL,
  gatewayAppCode:
    Vue.prototype.$globalConfig?.gatewayAppCodeMap?.submit ||
    getEnvConfig().GATEWAY_APP_CODE,
};
const SubmitProductConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_COMMON_URL,
  gatewayAppCode:
    Vue.prototype.$globalConfig?.gatewayAppCodeMap?.common ||
    getEnvConfig().GATEWAY_APP_CODE,
};


const StoreConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_STORE_URL,
  gatewayAppCode:
    Vue.prototype.$globalConfig?.gatewayAppCodeMap?.store ||
    getEnvConfig().GATEWAY_APP_CODE,
};
const CustomerServicePluginConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_PLUGIN_URL,
  gatewayAppCode:
    Vue.prototype.$globalConfig?.gatewayAppCodeMap?.store ||
    getEnvConfig().GATEWAY_APP_CODE,
};

const marketingCommonConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_MARKETING_COMMON_URL,
  gatewayAppCode: getEnvConfig().GATEWAY_APP_CODE,
};

const turntableConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_TURNTABLE_URL,
  gatewayAppCode: getEnvConfig().GATEWAY_APP_CODE,
};

const BargainConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_BARGAIN_URL,
  gatewayAppCode: getEnvConfig().GATEWAY_APP_CODE,
};

const buyGiftConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_BUY_GIFT_URL,
  gatewayAppCode: getEnvConfig().GATEWAY_APP_CODE
}

const PresaleConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_PRESALE_URL,
  gatewayAppCode: getEnvConfig().GATEWAY_APP_CODE
}

const GroupConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_GROUP_URL,
  gatewayAppCode: getEnvConfig().GATEWAY_APP_CODE
}

const FullReductionConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_FULL_REDUCTION_URL,
  gatewayAppCode: getEnvConfig().GATEWAY_APP_CODE
}

const MessageCenterConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_MESSAGE_CENTER_URL,
  gatewayAppCode: getEnvConfig().GATEWAY_APP_CODE
}

const contractConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_CONTRACT_URL,
  gatewayAppCode: getEnvConfig().GATEWAY_APP_CODE
}
const CouponSubmitConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_COUPON_SUBMIT_URL,
  gatewayAppCode: getEnvConfig().GATEWAY_APP_CODE
}
const CouponCodeConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_COUPON_CODE_URL,
  gatewayAppCode: getEnvConfig().GATEWAY_APP_CODE
}
const CommentConfig: BeConfig = {
  gatewayUrl: getEnvConfig().GATEWAY_COMMENT_URL,
  gatewayAppCode: getEnvConfig().GATEWAY_APP_CODE
}

export const MainDomain = new MainService(mainConfig, request);
export const ProductDomain = new ProductService(productConfig, request);
export const MediaDomain = new MediaService(mediaConfig, request);
export const CommonDomain = new CommonService(commonConfig, request);
export const CommonDomainI18n = new CommonServiceI18n(commonConfig, request);
export const TaskDomain = new TaskService(taskConfig, request);
export const StockDomain = new StockService(stockConfig, request);
export const WareStockDomain = new StockService(wareStockConfig, request);
export const ShopDomain = new ShopService(shopConfig, request);
export const SettleDomain = new SettleService(settleConfig, request);
export const CouponDomain = new CouponService(couponConfig, request);
export const ShippingDomain = new ShippingService(shippingConfig, request);
export const AccountDomain = new AccountService(accountConfig, request);
export const OrderDomain = new OrderService(orderConfig, request);
export const AfsDomain = new AfsService(afsConfig, request);
export const PromoDomain = new PromoService(promoConfig, request);
export const HomeDomain = new HomeService(homeConfig, request);
export const HelpCenterDomain = new HelpCenterService(
  helpCenterConfig,
  request
);
export const InvoiceDomain = new InvoiceService(InvoiceConfig, request);
export const InviteDomain = new InviteService(InviteConfig, request);
export const SubmitDomain = new SubmitService(SubmitConfig, request);
export const SubmitProductDomain = new SubmitService(
  SubmitProductConfig,
  request
);
export const StoreDomain = new StoreService(StoreConfig, request);
export const TurntableDomain = new LotteryService(turntableConfig, request);
export const MarketingCommonDomain = new MarketingCommonService(
  marketingCommonConfig,
  request
);
export const CustomerServicePluginDomain = new PluginService(
  CustomerServicePluginConfig,
  request
);
export const BargainDomain = new BargainService(BargainConfig, request);
export const buyGiftDomain = new BuyGiftService(buyGiftConfig, request);
export const PresaleDomain = new PresaleService(PresaleConfig, request);
export const GroupDomain = new GroupService(GroupConfig, request);
export const FullReductionDomain = new FullReductionService(FullReductionConfig, request);
export const MessageCenterDomain = new MessageCenterService(MessageCenterConfig, request);
export const ContractDomain = new ContractService(contractConfig, request);
export const CouponSubmitDomain = new CouponSubmitService(CouponSubmitConfig, request);
export const CouponCodeDomain = new CouponCodeService(CouponCodeConfig, request);
export const SettlementServiceDomain = new SettlementService(settlementConfig,request)
export const InnerSettlementServiceDomain = new InnerSettlementService(settlementConfig,request)
export const CommentDomain = new CommentService(CommentConfig, request)
