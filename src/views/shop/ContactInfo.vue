<template>
  <KaContactInfo :service="service" :imgDomains="imageDomains">
  </KaContactInfo>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ShopDomain } from "../../service/index";
import {getEnvConfig} from "@/constants/envConfig";

@Component({
})
export default class ContactInfo extends Vue {
  private readonly service = ShopDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS
}
</script>
