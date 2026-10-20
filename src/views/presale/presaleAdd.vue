<template>
  <KaPresaleAdd
    :service="PresaleService"
    :commonService="CommonService"
    @onSuccess="_success"
    @onCancel="_cancel"
    :imgDomains="imgDomains"
  >
  </KaPresaleAdd>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import {PresaleDomain, CommonDomain} from "@/service";
import {getEnvConfig} from "@/constants/envConfig";
import {ROUTES} from "@/router";

@Component
export default class DemoKaPresaleAdd extends Vue {
  private readonly CommonService = CommonDomain;
  private readonly PresaleService = PresaleDomain;
  private imgDomains = getEnvConfig().IMAGE_DOMAINS;
  _success() {
    this.$router.push(ROUTES.PRESALE_PAGE)
  }
  _cancel() {
    this.$router.push(ROUTES.PRESALE_PAGE)
  }
}
</script>
