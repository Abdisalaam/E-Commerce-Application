<template>
  <div>
    <ka-integral-proportion-list
      :ShopService="ShopServices"
      :imgDomains="imageDomains"
    ></ka-integral-proportion-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import { ShopDomain } from "@/service";
import {getEnvConfig} from "@/constants/envConfig";

@Component
export default class DemoIntegralProportionList extends Vue {
  private ShopServices = ShopDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS;
}
</script>
