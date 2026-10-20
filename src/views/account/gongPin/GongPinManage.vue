<template>
  <ka-gong-pin-manage :AccountService="AccountService"></ka-gong-pin-manage>

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
