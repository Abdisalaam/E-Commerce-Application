<template>
  <div>
    <ka-role-manage-list
      :AccountService="AccountService"
      :hideRoleTypes="[]"
      @goToAddRole="goToAddRole"
      @goToEditRole="goToEditRole"
      @goToBindRole="goToBindRole"
    ></ka-role-manage-list>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { AccountDomain } from "@/service/index";

@Component
export default class RoleManage extends Vue {
  AccountService = AccountDomain;
  goToAddRole() {
    this.$router.push({
      path: "/addRole",
    });
  }
  goToEditRole(roleId: string) {
    this.$router.push({
      path: "/editRole",
      query: { roleId },
    });
  }
  goToBindRole(roleId: string) {
    this.$router.push({
      path: "/bindRole",
      query: { roleId },
    });
  }
}
</script>

