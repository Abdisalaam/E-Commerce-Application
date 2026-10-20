<template>
  <div class="detail-page">
    <div class="detail-title">{{ $t("promo.viewFreeDeliveryPromo") }}</div>
    <ka-free-delivery-promo-detail :promo-service="promoDomain"
                                   :promo-id="promoId"
                                   :imageDomains="imageDomains"></ka-free-delivery-promo-detail>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {getEnvConfig} from "@/constants/envConfig";
import {PromoDomain} from "@/service";

@Component
export default class ViewFreeDeliveryPromo extends Vue {
  private promoDomain = PromoDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS;
  private promoId = "";

  mounted () {
    const {promoId} = this.$route.query;
    this.promoId = String(promoId);
  }
}
</script>
