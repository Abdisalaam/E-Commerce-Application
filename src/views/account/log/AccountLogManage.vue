<template>
  <ka-account-log-list :AccountService="AccountService" :terminal="1"></ka-account-log-list>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { AccountDomain } from "@/service";
@Component
export default class DemoAddUser extends Vue {
  private AccountService = AccountDomain;
}
</script>
