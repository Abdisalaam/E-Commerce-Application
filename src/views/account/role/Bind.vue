<template>
  <ka-bind-role
    :AccountService="AccountService"
    @goToRoleManageList="goToRoleManageList"
    @goToAddUser="goToAddUser"
  ></ka-bind-role>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import { AccountDomain } from "@/service";
@Component
export default class DemoBindRole extends Vue {
  private AccountService = AccountDomain;
  goToRoleManageList() {
    this.$router.push({
      path: "/roleManage",
    });
  }
  goToAddUser() {
    setTimeout(() => {
      window.open("/addUser");
    });
  }
}
</script>
