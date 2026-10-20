<template>
  <ka-add-user
    :AccountService="AccountService"
    :CommonService="CommonService"
    @goToUserManageList="goToUserManageList"
  ></ka-add-user>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import {AccountDomain, CommonDomainI18n} from "@/service";
@Component
export default class DemoAddUser extends Vue {
  private AccountService = AccountDomain;
  private CommonService = CommonDomainI18n;
  goToUserManageList() {
    this.$router.push({
      path: "/userManage",
    });
  }
}
</script>
