<template>
  <ka-add-role
    :AccountService="AccountService"
    @goToRoleManageList="goToRoleManageList"
  ></ka-add-role>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { AccountDomain } from "@/service/index";

@Component
export default class AddRole extends Vue {
  private AccountService = AccountDomain;
  goToRoleManageList() {
    this.$router.push({
      path: "/roleManage",
    });
  }
}
</script>
