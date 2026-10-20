<template>
    <div>
      <ka-ware-manage
        :product-service="productDomain"
        :stock-service="stockDomain"
        :common-service="commonDomain"
        :actions="actionsForOffShelf"
        :imageDomains="imageDomains"
        :is-self-sale="isSelfSale"
        :extFiltersSettings="extFilters"
        :exportMax="MAX_EXPORT_NUM"
        :page-type="PAGE_TYPE_ENUM.OFF_SHELF_PAGE"
      ></ka-ware-manage>
    </div>
</template>

<script lang="ts">
import {Component} from "vue-property-decorator";
import {ProductManageMixin} from "./ProductManageMixin";
import {ROUTES} from "../../router";

@Component
export default class OffShelfWare extends ProductManageMixin {

  get actionsForOffShelf () {
    return {
      ...this.actions,
      onAddProduct: this.toAddPageForOffShelf,
      onEditProduct: this.toEditPageForOffShelf,
      onCopyProduct: this.toCopyPageForOffShelf,
    }
  }

  public toAddPageForOffShelf() {
    this.$router.push({path: ROUTES.OFF_SHELF_WARE_ADD.path});
  }

  public toEditPageForOffShelf(productId: string) {
    this.$router.push({path: ROUTES.OFF_SHELF_WARE_EDIT.path + "?productId=" + productId});
  }

  public toCopyPageForOffShelf (productId: string) {
    if (productId) {
      this.$router.push({
        path: ROUTES.OFF_SHELF_WARE_ADD.path,
        query: {
          productId: productId,
          isCopy: "1" // 传大于0的数即可
        }
      });
    }
  }
}
</script>
