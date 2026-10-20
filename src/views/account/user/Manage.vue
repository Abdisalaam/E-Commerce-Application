<template>
  <ka-user-manage-list
    :AccountService="AccountService"
    @goToAddUser="goToAddUser"
    @goToEditUser="goToEditUser"
  ></ka-user-manage-list>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import { AccountDomain } from "@/service";
@Component
export default class UserManageList extends Vue {
  private AccountService = AccountDomain;
  goToAddUser(departmentId: string) {
    this.$router.push({
      path: "/addUser",
      query: {
        departmentId,
      },
    });
  }
  goToEditUser(userId: string) {
    this.$router.push({
      path: "/editUser",
      query: { userId },
    });
  }
}
</script>
