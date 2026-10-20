<template>
  <div class="noAuth">
    <div class="noAuth_container">
      <div class="noAuth_title_img">
        <img :src="noAuthimg" />
      </div>
      <div>
        <div class="title">{{i18n.t('common.noPermissions')}}</div>
        <div class="info">{{i18n.t('common.activatePermissions')}}</div>
      </div>

    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import i18n from "@/lang/i18n";
@Component
export default class NoAuthPage extends Vue {
  private i18n = i18n;
  noAuthimg = require("@/assets/img/noAuth.png");
}
</script>

<style lang="scss" scoped>
.noAuth {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--rcd-font-size-14x);
  background: var(--rcd-color-fill-white);
  .noAuth_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .noAuth_title_img {
      width: 120px;
      height: 120px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 70px;
        object-fit: contain;
      }
    }
    .title {
      font-size: var(--rcd-font-size-24x);
      font-weight: var(--rcd-font-weight-medium);
      line-height: var(--rcd-line-height-36);
      margin: 8px 0 4px;
      text-align: center;
      color: var(--rcd-color-text-400);
    }
    .info{
      color: var(--rcd-color-text-200);
      font-size: var(--rcd-font-size-14x);
      line-height: var(--rcd-line-height-22);
      text-align: center;
    }
  }
}
</style>
