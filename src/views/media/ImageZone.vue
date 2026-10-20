<template>
<div class="image-zone-page">
  <ka-media-img
  :newGroupInsertBefore="newGroupInsertBefore"
  :media-service="MediaService"
  :imageDomains="imageDomains"
  :is-route-query="true"
  />
</div>

</template>

<script lang="ts">
import { Vue} from "vue-property-decorator";
import {Component} from "vue-property-decorator";
import { MediaDomain } from '@/service/index'
import { getKaConfig } from "@/kaConfig";

@Component
export default class ImageZone extends Vue {
  MediaService = MediaDomain
  imageDomains = Vue.prototype.$globalConfig.imageDomain
   newGroupInsertBefore = getKaConfig().main.newGroupInsertBefore
}
</script>

<style lang="scss" scoped>
.image-zone-page {
  height: 100%;
  box-sizing: border-box;
  background: var(--rcd-color-fill-white);
}
</style>
