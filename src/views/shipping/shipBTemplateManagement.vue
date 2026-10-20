<template>
  <div>
    <ka-ship-b-template-management :ShippingService="ShippingService"></ka-ship-b-template-management>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {
  ShippingDomain
} from "../../service/index";
@Component
export default class ShipBTemplateManagement extends Vue {
  ShippingService = ShippingDomain;
}
</script>

