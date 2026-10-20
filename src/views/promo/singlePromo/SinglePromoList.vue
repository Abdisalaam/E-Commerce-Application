<template>
  <ka-promo-list :image-domains="imageDomains"
                 :actions="actions"
                 :promo-type="promoType"
                 :promo-service="promoDomain"></ka-promo-list>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {PromoDomain} from "@/service";
import {getEnvConfig} from "@/constants/envConfig";
import {PROMO_TYPE} from "@Abdisalaam/b2c-be-promotion-ui-i18n/packages/common/constants/bizConstans"
import {PromoListActions} from "@Abdisalaam/b2c-be-promotion-ui-i18n/packages/pagesComponents/promoList/types"
import {ROUTES} from "@/router";
import {PromoVo} from "@Abdisalaam/b2c-be-promotion-sdk-i18n/lib/vos/return/PromoVo";

@Component
export default class FreeDeliveryPromoList extends Vue {
  private promoDomain = PromoDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS;
  private promoType = PROMO_TYPE.SINGLE_PRODUCT;
  private actions: PromoListActions = {
    toAddSinglePromo: () => {
      this.$router.push({
        path: ROUTES.PROMO_SINGLE_ADD.path
      })
    },
    toPromoDetail: (row: PromoVo) => {
      this.$router.push({
        path: ROUTES.PROMO_SINGLE_DETAIL.path,
        query: {
          promoId: String(row?.promoId)
        }
      })
    }
  }
}
</script>
