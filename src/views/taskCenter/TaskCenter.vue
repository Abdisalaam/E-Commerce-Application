<template>
  <div class="page-content">
    <KaTaskLists
      :service="service"
      :appType="1"
      :tab="currentTab"
      :taskExportExtConfig="exportExtConfig"
      :taskImportExtConfig="importExtConfig">
    </KaTaskLists>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {TaskDomain} from "../../service/index";

@Component({
})
export default class TaskLists extends Vue {
  private readonly service = TaskDomain;
  private importExtConfig = {
    filterConfig: {
      actions: {
        // 是否显示批量按钮
        showBatchImport: false
      }
    },
    pagerConfig: {
      layout: {
        pre: ["total"],
        after: ["sizes", "jumper"],
      }
    }
  }
  private exportExtConfig = {
    pagerConfig: {
      layout: {
        pre: ["total"],
        after: ["sizes", "jumper"],
      }
    }
  }
  private currentTab = "";

  mounted() {
    const currentTab = this.$route.query.currentTab ? this.$route.query.currentTab as string : null;
    const tab = this.$route.query.tab ? this.$route.query.tab as string : null;
    const activeTab = currentTab || tab || null;
    if (activeTab) {
      this.currentTab = activeTab;
    }
  }
}
</script>
