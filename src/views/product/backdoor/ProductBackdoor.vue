<template>
  <div v-if="true" class="title-tips">This page has been offline.</div>
  <ka-b-product-backend-page v-else :product-service="productDomain"></ka-b-product-backend-page>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {ProductDomain} from "@/service";

@Component
export default class ProductBackdoor extends Vue {
  private productDomain = ProductDomain;
}
</script>
<style lang="scss" scoped>
.title-tips {
  padding: 20px;
  font-size: 24px;
  text-align: center;
}
</style>

