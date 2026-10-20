<template>
  <div>
    <ka-comment-b-comment-list :comment-service="CommentService"
                               :common-service="CommonService"
                               :image-domains = "imageDomains"
                               @goCommentDetail="goCommentDetail"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {BCommentVo} from "@Abdisalaam/b2c-be-comment-sdk-i18n/lib/vos/BCommentVo";
import {getEnvConfig} from "@/constants/envConfig";
import { ROUTES } from '@/router';
import {CommentDomain, CommonDomain} from "@/service";

@Component
export default class CommentList extends Vue {
  CommentService = CommentDomain
  CommonService = CommonDomain
  imageDomains = getEnvConfig().IMAGE_DOMAINS;

  private goCommentDetail (row: BCommentVo) {
    this.$router.push({
      path: ROUTES.COMMENT_DETAIL.path,
      name: ROUTES.COMMENT_DETAIL.name,
      params: {
        data: JSON.stringify(row),
      }
    })
  }
}
</script>
