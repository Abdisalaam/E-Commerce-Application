<template>
  <div>
      <ka-self-set-manage :service="StoreService" :commonService="CommonService"></ka-self-set-manage>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {StoreDomain} from "@/service/index";
import {CommonDomain} from "@/service/index";

@Component
export default class DemoSelfSetManage extends Vue {
 private StoreService = StoreDomain;
 private CommonService = CommonDomain
}
</script>
