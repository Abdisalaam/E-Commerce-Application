<template>
  <div>
    <ka-shop-home
      :common-service="CommonService"
      :settle-service="SettleService"
      :image-domains="IMG_DOMAINS"
      :cookieDomain="cookieDomain"
      :logo="logo"
      :bannerImgUrl="bannerImgUrl"
      :main-tips="$t('middlePage.hasBeenASupplierTips')"
      :isShowZhCn="isShowZhCn"
      @on-settle="handleSettle"
      @on-account="handleAccountManage"
      @on-home="onHome"
      @on-logout="logout">
      <template slot="buttons">
        <el-button size="large" type="primary" @click="toLoginPage">{{$t('middlePage.switchToVender')}}</el-button>
      </template>
    </ka-shop-home>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import {MiddlePageMixin} from "@/views/middlePage/MiddlePageMixin";

@Component
export default class WaitSettle extends MiddlePageMixin {}
</script>
