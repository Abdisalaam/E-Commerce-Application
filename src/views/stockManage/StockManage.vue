<template>
  <div>
    <ka-stock-manage :image-domains="imageDomains"
                     :stock-service="WareStockDomain"
                     :task-service="TaskService"
                     :common-service="CommonService"
                     :actions="actions"
                     :maxExportCount="MAX_EXPORT_COUNT"
                     :isSelfSale="isSelfSale"></ka-stock-manage>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {WareStockDomain, CommonDomain, TaskDomain} from "@/service";
import {getEnvConfig} from "@/constants/envConfig";
import {SkuStockVo} from "@Abdisalaam/b2c-be-stock-sdk-i18n/lib/vos/return/SkuStockVo";
import {toSkuDetail} from "@/constants/busi/BusiConstants";
import {ROUTES} from "@/router";
import {TaskTypeEnum} from "@Abdisalaam/b2c-be-task-sdk-i18n/lib/enums/TaskEnum";

@Component
export default class StockManage extends Vue {
  private WareStockDomain = WareStockDomain;
  private CommonService = CommonDomain;
  private TaskService = TaskDomain;
  private imageDomains = getEnvConfig().IMAGE_DOMAINS
  readonly MAX_EXPORT_COUNT = 30000;

  private actions = {
    onClickSkuName: (s: SkuStockVo) => {
      s.skuId && toSkuDetail(s.skuId);
    },
    toTackCenter: this.toTackCenter
  }

  toTackCenter() {
    this.$router.push({
      path: ROUTES.TASK_CENTER.path,
      query: {
        currentTab: String(TaskTypeEnum.EXPORT)
      }
    });
  }

  // 是否自营
  get isSelfSale() {
    return !!Vue.prototype.$globalConfig?.venderInfo?.isSelfSale
  }
}
</script>
