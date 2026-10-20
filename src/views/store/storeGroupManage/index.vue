<template>
  <div>
    <ka-store-group-manage
      :service="StoreService"
      :commonService="CommonService"
      :max-num="MAX_NUM"
    ></ka-store-group-manage>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import {Component} from "vue-property-decorator"
import {StoreDomain} from "@/service/index"
import {CommonDomain} from "@/service/index"
@Component
export default class DemoStoreGroupManage extends Vue {
  private StoreService = StoreDomain
  private CommonService = CommonDomain
  private MAX_NUM = 30;
}
</script>
