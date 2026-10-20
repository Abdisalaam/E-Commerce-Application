<template>
  <ka-edit-user
    :AccountService="AccountService"
    @goToUserManageList="goToUserManageList"
  ></ka-edit-user>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { AccountDomain } from "@/service";
@Component
export default class DemoEditUser extends Vue {
  private AccountService = AccountDomain;
  goToUserManageList() {
    this.$router.push({
      path: "/userManage",
    });
  }
}
</script>
