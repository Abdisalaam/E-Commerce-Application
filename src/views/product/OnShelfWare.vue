<template>
  <div>
    <ka-ware-manage
      :product-service="productDomain"
      :common-service="commonDomain"
      :stock-service="stockDomain"
      :actions="actions"
      :imageDomains="imageDomains"
      :is-self-sale="isSelfSale"
      :extFiltersSettings="extFilters"
      :exportMax="MAX_EXPORT_NUM"
      :page-type="PAGE_TYPE_ENUM.ON_SHELF_PAGE"
    ></ka-ware-manage>
  </div>
</template>

<script lang="ts">
import {Component} from "vue-property-decorator";
import {ProductManageMixin} from "./ProductManageMixin";

@Component
export default class OffShelfWare extends ProductManageMixin {

}
</script>
