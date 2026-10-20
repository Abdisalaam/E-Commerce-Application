<template>
  <div>
      <ka-store-task
       :service="StoreService"
      ></ka-store-task>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {StoreDomain} from "../../../service/index";

@Component
export default class DemoStoreTask extends Vue {
 private StoreService = StoreDomain;
}
</script>
