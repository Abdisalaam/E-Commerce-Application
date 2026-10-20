<template>
  <div class="img-recycle-bin-page">
    <ka-media-img-recycle-bin 
    :media-service="MediaService"
    :image-domains="imageDomains"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import { MediaDomain } from '@/service/index'
@Component
export default class ImgRecycleBin extends Vue {
  MediaService = MediaDomain

  imageDomains= Vue.prototype.$globalConfig.imageDomain
}
</script>
<style lang="scss" scoped>
.img-recycle-bin-page {
  height: 100%;
  box-sizing: border-box;
  background: var(--rcd-color-fill-white);
  padding: 24px;
}
</style>