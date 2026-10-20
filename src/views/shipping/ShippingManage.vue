<template>
  <div>
      <ka-ship-home-page :ShippingService="ShippingService"></ka-ship-home-page>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {ShippingDomain} from "@/service/index";

@Component
export default class ShippingManage extends Vue {
  ShippingService=ShippingDomain;
}
</script>
