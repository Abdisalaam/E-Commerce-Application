<template>
  <KaPresaleList
    :service="PresaleService"
    :imgDomains="imgDomains"
    @onDetail="_detail"
    @onAdd="_add"
  >
  </KaPresaleList>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import {PresaleDomain} from "@/service";
import {getEnvConfig} from "@/constants/envConfig";
import {ROUTES} from "@/router";

@Component
export default class DemoKaPresaleList extends Vue {
  private readonly PresaleService = PresaleDomain;
  private imgDomains = getEnvConfig().IMAGE_DOMAINS;
  private _detail(presaleId: string) {
    this.$router.push(`/presaleDetail/${presaleId}`);
  }
  private _add() {
    this.$router.push(ROUTES.PRESALE_ADD.path);
  }
}
</script>
