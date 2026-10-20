<template>
  <div>
      <ka-be-stock-stream-list 
        :image-domains="imageDomains"
        :stock-service="WareStockDomain"
      />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {WareStockDomain} from "@/service";
import {getEnvConfig} from "@/constants/envConfig";

@Component
export default class DemoBeStockStreamList extends Vue {
  private WareStockDomain = WareStockDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS
}
</script>
