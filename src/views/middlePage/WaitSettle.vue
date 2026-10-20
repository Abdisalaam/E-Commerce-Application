<template>
  <div>
    <ka-shop-home
      :common-service="CommonService"
      :settle-service="SettleService"
      :image-domains="IMG_DOMAINS"
      :cookieDomain="cookieDomain"
      :logo="logo"
      :bannerImgUrl="bannerImgUrl"
      :isShowZhCn="isShowZhCn"
      @on-settle="handleSettle"
      @on-account="handleAccountManage"
      @on-home="onHome"
      @on-logout="logout">
      <template slot="buttons">
        <el-button size="large" @click="handleSettle" :disabled="!hasRead">{{$t('waitSettle.settleToVender')}}</el-button>
        <el-button size="large" type="primary" @click="onHome">{{$t('waitSettle.switchToVender')}}</el-button>
      </template>
      <div class="wait-bottom" slot="bottom">
        <el-checkbox v-model="hasRead">{{ $t('waitSettle.text1') }}</el-checkbox>&nbsp;<el-link type="info" :underline="false" @click="handleViewProtocol">{{$t('waitSettle.text2')}}</el-link>
      </div>
    </ka-shop-home>

    <pdf-view-dialog v-if="visible" :visible.sync="visible" :fullscreen="false" :pdf-url="pdfUrl"></pdf-view-dialog>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import {MiddlePageMixin} from "./MiddlePageMixin";
import Vue from "vue";
import {HelpCenterDomain} from "@/service";
import PdfViewDialog from "@/components/PdfViewDialog.vue";
@Component({components: {PdfViewDialog}})
export default class WaitSettle extends MiddlePageMixin {
  private HelpCenterService = HelpCenterDomain;
  private waitSettleInArticleId = Vue.prototype.$globalConfig?.agreementArticleId?.waitSettleInArticleId;
  private hasRead = false;
  private visible = false;
  private pdfUrl = '';

  created() {
    this.getPdfUrl();
  }

  getPdfUrl(success?: () => any) {
    this.waitSettleInArticleId && this.HelpCenterService.b_detailArticle({
      sameResourceSign: String(this.waitSettleInArticleId)
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
  private handleViewProtocol() {
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

<style lang="scss">
  .wait-bottom {
    margin-top: 16px;
    text-align: center;
  }
</style>
