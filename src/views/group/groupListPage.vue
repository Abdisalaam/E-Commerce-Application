<template>
  <div class="test">
    <KaGroupListPage
      :GroupService="GroupService"
      :no-login-page="noLoginPage"
      @navigateToCreate="navigateToCreate"
      @navigateToDetails="navigateToDetails"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { GroupDomain } from "@/service";
import { getEnvConfig } from "@/constants/envConfig";

@Component
export default class DemoGroupListPage extends Vue {
  GroupService = GroupDomain;
  private noLoginPage = getEnvConfig().LOGIN_URL + location.href;

  navigateToCreate(params: any) {
    this.$router.push({ name: "groupCreate", query: { ...params } });
  }

  navigateToDetails(params: any) {
    this.$router.push({ name: "groupDetails", query: { ...params } });
  }
}
</script>
<style lang="scss" scoped>
.test {
  background: #fff;
}
</style>
