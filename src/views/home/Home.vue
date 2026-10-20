<template>
  <div style="width: 100%; height: 100%; overflow: auto">
    <ka-home
      :home-service="HomeService"
      :common-service="CommonService"
      :main-service="MainService"
      @routerPath="routerPath"
      @routerToShop="routerToShop"
      @routerToCustom="routerToCustom"
      @routerToHelpCenter="routerToHelpCenter"
      @routerToHelpCenterHome="routerToHelpCenterHome"
      @on-renewal="toRenewPage"
      :imageDomains="imageDomains"
      :isGetUnReadCount="isGetUnReadCount"
      :contactPhone="contactPhone"
      :contactEmail="contactEmail"
    ></ka-home>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { KaHome } from "@Abdisalaam/b2c-be-home-ui-i18n";
import { CommonDomain, HomeDomain, MainDomain } from "@/service";
import { getEnvConfig } from "@/constants/envConfig";
import { ROUTES } from "@/router";
import { COOKIE_KEYS } from "@Abdisalaam/kapaas-common-sdk/lib/config/CookieKeys";
import {cookieUtil} from "@Abdisalaam/kapaas-common-sdk/lib/utils/cookieUtil";
import openExtensyaLink from "@/common/utils/extensyaUtils";
import {COOKIE_LANG} from "@/constants/constants";

const routerMap = {
  PAY_ORDER: `${ROUTES.ORDER_LIST.path}?orderStatus=-2`, // 待付款订单
  DELIVERY_ORDER: `${ROUTES.ORDER_LIST.path}?orderStatus=2`, // 待发货订单
  CANCELED_AFTER_SALE: `${ROUTES.CANCEL_ORDER_LIST.path}?applyStatus=1`, // 待取消审核订单
  RETURNED_AFTER_SALE: `${ROUTES.AFS_LIST.path}?serviceStatus=1`, // 待退换货审核单
  SET_STOCK: `${ROUTES.STOCK_MANAGE.path}?stockSumMin=0&stockSumMax=10&productStatus=1`, // 设置库存
  SET_STOCK_SKU: ROUTES.STOCK_MANAGE.path, // 设置某个sku库存
};
type RouterMapKeyType = keyof typeof routerMap;
type RouterPramsType = {
  url?: string;
  key?: RouterMapKeyType;
  query?: any;
};

@Component({
  components: {
    KaHome,
  },
})
export default class Home extends Vue {
  private CommonService = CommonDomain;
  private HomeService = HomeDomain;
  private MainService = MainDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS;

  private isGetUnReadCount = getEnvConfig().IS_GET_UNREAD_COUNT;
  private contactPhone = "186****000"
  private contactEmail = "email@test.com"

  private routerPath(params: RouterPramsType) {
    const { url, key, query } = params;
    this.$router.push({
      path: url || `${routerMap[key as RouterMapKeyType] || ""}`,
      query,
    });
  }

  // 老版地址是 http://mall.b2cgh4.Abdisalaam.sa/index-{shopId}.html
  // 店铺首页换成新版  http://cc.b2cgh4.Abdisalaam.sa/shop/pc/{shopId}.html
  private routerToShop(shopId: string) {
    const url = `//cc.${Vue.prototype.$globalConfig.outerSecondaryDomain}/shop/pc/${shopId}.html`;
    setTimeout(() => {
      window.open(url, "_blank");
    })
  }

  private routerToCustom() {
    this.MainService.getUser()
      .then(result => {
        console.log(result)
        openExtensyaLink({
          // @ts-ignore
          userEmail: result?.vo?.email || result?.vo?.mobile || "",
          lang: cookieUtil.getCookie(COOKIE_KEYS.B2C_B_LANG) === COOKIE_LANG.enUS ? 'English' : 'Arabic',
          target: "bHome"
        })
      })
      .catch(()=>{
        openExtensyaLink({
          lang: cookieUtil.getCookie(COOKIE_KEYS.B2C_B_LANG) === COOKIE_LANG.enUS ? 'English' : 'Arabic',
          target: "bHome"
        })
      })
  }

  // 跳转帮助中心详情
  private routerToHelpCenter(id: string) {
    const url = `/help/notice?id=${id}`;
    setTimeout(() => {
      window.open(url, "_blank");
    })
  }

  // 跳转帮助中心首页
  private routerToHelpCenterHome() {
    setTimeout(() => {
      window.open("/help/home", "_blank");
    })
  }

  // 跳转续签页面
  private toRenewPage() {
    this.$router.push({
      path: ROUTES.SHOP_RENEWAL.path
    })
  }
}
</script>


