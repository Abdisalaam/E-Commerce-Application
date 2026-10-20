<template>
  <ka-ware-sale-attr
    :product-service="productDomain"
  ></ka-ware-sale-attr>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {ProductDomain} from "@/service";

@Component
export default class AttrWare extends Vue {
  private productDomain = ProductDomain;
}
</script>
