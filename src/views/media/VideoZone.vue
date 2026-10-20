<template>
  <div class="video-zone-page">
      <ka-media-video
      :media-service="MediaService"
      :CommonService="CommonService"
      :image-domains="imageDomains"
      @viewAgreement="viewAgreement"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {MediaDomain, CommonDomain, HelpCenterDomain} from '@/service/index'

@Component
export default class VideoZone extends Vue {
  MediaService = MediaDomain
  CommonService = CommonDomain
  HelpCenterService = HelpCenterDomain;
  videoArticleId = Vue.prototype.$globalConfig?.agreementArticleId?.videoArticleId

  imageDomains= Vue.prototype.$globalConfig.imageDomain

  viewAgreement() {
    this.HelpCenterService.b_detailArticle({ sameResourceSign: this.videoArticleId }).then((res) => {
      if (res?.attaches && res?.attaches?.length) {
        setTimeout(() => {
          window.open(res?.attaches?.[0]?.path, "_blank");
        })
      }
    });
  }
}
</script>
<style lang="scss" scoped>
.video-zone-page {
  box-sizing: border-box;
  background: var(--rcd-color-fill-white);
  padding: 24px;
  border-radius: var(--rcd-border-radius-8x);
}
</style>
