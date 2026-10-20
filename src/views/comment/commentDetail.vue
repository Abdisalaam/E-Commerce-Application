<template>
  <ka-comment-b-comment-detail :imageDomains="imageDomains"/>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {getEnvConfig} from "@/constants/envConfig";

@Component
export default class CommentDetail extends Vue {
  private imageDomains = getEnvConfig().IMAGE_DOMAINS;

}
</script>
