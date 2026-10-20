<template>
  <div>
    <ka-shop-settle
      :common-service="CommonService"
      :settle-service="SettleService"
      :shop-service="ShopService"
      :image-domains="IMAGE_DOMAINS"
      :logo="logo"
      :protocal-id="settleInArticleId"
      :virtual-protocal-id="virtualArticleId"
      :operWxQR="operWxQR"
      :operwx="operwx"
      :payWay="PAY_WAY"
      :lian-env="LIAN_LIAN_ENV"
      :settleProtocalText="settleProtocalText"
      :flagship-store-auth-url="flagshipStoreAuthUrl"
      :banner-img-url="bannerImgUrl"
      :cookieDomain="cookieDomain"
      :isShowZhCn="isShowZhCn"
      :map-key="mapKey"
      :defaultAddress="defaultAddress"
      @on-logout="logout"
      @on-settle="handleOnSettle"
      @on-open-store="handleOpenStore"
      @on-account-manage="handleAccountManage"
      @goToVenderInfo="goToVenderInfo"
      @to-open-protocal="toOpenProtocal"
      :area-id="defaultAreaId"
    ></ka-shop-settle>

    <pdf-view-dialog v-if="visible" :visible.sync="visible" :pdf-url="pdfUrl"></pdf-view-dialog>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { CommonDomain, handleLogout, HelpCenterDomain, SettleDomain, ShopDomain } from "../../service/index";
import { getEnvConfig } from "@/constants/envConfig";
import { ROUTES } from "@/router";
import { OUTER_ROUTERS } from "@/router/routerPath";
import {COOKIE_LANG, DEFAULT_LANG, LANG_COOKIE_KEY} from "@/constants/constants";
import { cookieUtil } from "@Abdisalaam/kapaas-common-sdk/lib/utils/cookieUtil";
import PdfViewDialog from "@/components/PdfViewDialog.vue";

@Component({
  components: {PdfViewDialog}
})
export default class DemoKaShopSettle extends Vue {
  private CommonService = CommonDomain;
  private SettleService = SettleDomain;
  private ShopService = ShopDomain;
  private HelpCenterService = HelpCenterDomain;
  private IMAGE_DOMAINS = getEnvConfig().IMAGE_DOMAINS;
  private logo = Vue.prototype.$globalConfig?.logoUrl || require("@/assets/img/main-logo.png");
  private settleInArticleId = Vue.prototype.$globalConfig?.agreementArticleId?.settleInArticleId;
  private virtualArticleId = Vue.prototype.$globalConfig?.agreementArticleId?.virtualArticleId;
  private PAY_WAY =  getEnvConfig().PAY_WAY;
  private LIAN_LIAN_ENV = getEnvConfig().LIAN_LIAN_ENV;
  private defaultAreaId =  Vue.prototype.$globalConfig?.defaultAreaId;
  // cookie域
  private cookieDomain = Vue.prototype.$globalConfig?.outerSecondaryDomain;
  private readonly mapKey = Vue.prototype.$globalConfig.mapKey;
  private readonly defaultAddress = JSON.parse(decodeURIComponent(Vue.prototype.$globalConfig.DEFAULT_ADDRESS_EN));
  private hasRead = false;
  private visible = false;
  private pdfUrl = '';
  readonly settleProtocalTextMaps = {
    [COOKIE_LANG.arSA]: "شروط وأحكام البائع",
    [COOKIE_LANG.enUS]: "3P (Marketplace) Seller- Terms & Conditions"
  }

  get settleProtocalText() {
    const cookieLang = cookieUtil.getCookie(LANG_COOKIE_KEY) || Vue.prototype.$globalConfig?.defaultLang || DEFAULT_LANG;
    if (cookieLang === COOKIE_LANG.arSA) {
      return this.settleProtocalTextMaps[COOKIE_LANG.arSA];
    }
    return this.settleProtocalTextMaps[COOKIE_LANG.enUS];
  }

  // 旗舰店授权书URL todo -- ksa环境无商家入驻，先不配置
  private flagshipStoreAuthUrl = "";
  // 开店任务的banner图通过固化配置传入
  private bannerImgUrl = require("@/assets/img/bannerImage.png");

  // 是否展示中文下拉，方便翻译，翻译后去掉
  private isShowZhCn = false;


  created() {
    this.getPdfUrl();
  }

  private handleOnSettle() {
    this.$router.push(ROUTES.WAIT_SETTLE.path);
  }

  // todo
  private handleOpenStore() {
    console.log("handleOpenStore, 开店任务");
  }
  // todo
  private handleAccountManage() {
    this.$router.push({
      path: OUTER_ROUTERS.JNOS.ACCOUNT_INFO
    })
  }
  // 跳转到店铺页面
  private goToVenderInfo() {
    this.$router.push({
      path: "/venderInfo",
    });
  }
  logout() {
    const { origin } = window.location;
    const _loginUrl = `${getEnvConfig().LOGIN_URL}${origin}`;
    window.location.href = _loginUrl;
  }
  // 跳转到入驻开发协议页
  toOpenProtocal() {
    if (this.pdfUrl) {
      // this.visible = true;
      // this.previewPDF(this.pdfUrl);
      window.open(this.pdfUrl, "_blank");
    } else {
      this.getPdfUrl(() => {
        // this.visible = true;
        // this.previewPDF(this.pdfUrl);
        window.open(this.pdfUrl, "_blank");
      })
    }
  }

  getPdfUrl(success?: () => any) {
    this.settleInArticleId && this.HelpCenterService.b_detailArticle({
      sameResourceSign: String(this.settleInArticleId)
    }).then((res) => {
      if (res?.attaches && res?.attaches?.length) {
        const pdfUrl = res?.attaches?.[0]?.path;
        if (pdfUrl) {
          this.pdfUrl = pdfUrl;
          if (success && typeof success === "function") {
            success();
          }
        }
      }
    })
  }

  public previewPDF(url: string, cb?: () => void): void {
    this.getBlob(url, (blob: Blob) => {
      this.previewAS(blob, cb);
    });
  }

  public getBlobFileUrl(url: string, cb?: (blobUrl: string) => any): void {
    this.getBlob(url, (blob: Blob) => {
      blob = new Blob([blob], { type: "application/pdf;chartset=UTF-8" });
      let fileURL = URL.createObjectURL(blob);
      cb && cb(fileURL);
    });
  }

  private getBlob(url: string, cb: (blob: Blob) => void): void {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
      if (xhr.status === 200) {
        cb(xhr.response);
      }
    };
    xhr.send();
  }

  private previewAS(blob: Blob, cb?: () => void): void {
    blob = new Blob([blob], { type: "application/pdf;chartset=UTF-8" });
    let fileURL = URL.createObjectURL(blob);
    cb && cb();
    // window.open(fileURL, '_blank');
    setTimeout(`window.open('${fileURL}');`, 500);
  }
}
</script>
