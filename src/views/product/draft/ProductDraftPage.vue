<template>
  <ka-product-draft-page :product-service="ProductService"
                         :common-service="CommonService"
                         :imageDomains="imageDomain"
                         :is-self-sale="isSelfSale"
                         :actions="actions"></ka-product-draft-page>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {CommonDomain, ProductDomain} from "@/service";
import {getEnvConfig} from "@/constants/envConfig";
import {IProductDraftPageActions} from "@Abdisalaam/b2c-be-product-ui-i18n/packages/pagesComponents/productDraftPage/types/types";
import {ROUTES} from "@/router";
import {TaskTypeEnum} from "@Abdisalaam/b2c-be-task-sdk-i18n/lib/enums/TaskEnum";

@Component
export default class ProductDraftPage extends Vue {
  private ProductService = ProductDomain;
  private CommonService = CommonDomain;
  private imageDomain = getEnvConfig().IMAGE_DOMAINS

  private actions: IProductDraftPageActions = {
    onEditDraft: this.onEditDraft,
    onCopyDraft: this.toCopyPage,
    onViewImportHistoryClick: this.toTaskImportPage
  };

  // 是否自营
  get isSelfSale() {
    return !!Vue.prototype.$globalConfig?.venderInfo?.isSelfSale
  }

  private onEditDraft(productDraftId: string) {
    this.$router.push({
      path: ROUTES.PRODUCT_DRAFT_EDIT.path,
      query: {
        draftId: productDraftId
      }
    });
  }
  private toCopyPage(productDraftId: string) {
    this.$router.push({
      path: ROUTES.PRODUCT_DRAFT_COPY.path,
      query: {
        draftId: productDraftId,
        isCopy: "true"
      }
    });
  }

  private toTaskImportPage() {
    this.$router.push({
      path: ROUTES.TASK_CENTER.path,
      query: {
        currentTab: String(TaskTypeEnum.IMPORT)
      }
    });
  }
}
</script>

