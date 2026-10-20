<template>
  <div>
    <ka-price-change-flow-list :product-service="ProductService"></ka-price-change-flow-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {ProductDomain} from '@/service';

@Component
export default class PriceChangeFlowManage extends Vue {
  ProductService = ProductDomain;
}
</script>
