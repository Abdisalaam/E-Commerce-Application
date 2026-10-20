<template>
  <ka-deduction-manage
    @on-task="onTask"
    :service="service"
  ></ka-deduction-manage>
</template>

<script lang="ts">
import { ROUTES } from "@/router";
import { Component, Vue } from "vue-property-decorator";
import { ShopDomain } from "../../service/index";

@Component({})
export default class ShopCommission extends Vue {
  private readonly service = ShopDomain;
  onTask() {
    this.$router.push({
      path: ROUTES.TASK_CENTER.path
    })
  }
}
</script>
