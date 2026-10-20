<template>
  <ka-edit-role
    :AccountService="AccountService"
    :hideRoleTypes="[]"
    @goToRoleManageList="goToRoleManageList"
  ></ka-edit-role>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import { AccountDomain } from "@/service/index";
@Component
export default class EditRole extends Vue {
  private AccountService = AccountDomain;
  goToRoleManageList() {
    this.$router.push({
      path: "/roleManage",
    });
  }
}
</script>
