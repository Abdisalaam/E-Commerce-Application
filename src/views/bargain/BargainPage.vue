<template>
  <div>
    <ka-bargain-page
      :service="service"
      @onAdd="onAdd"
      @onDetail="onDetail"
      @onEdit="onEdit"
      @onCopy="onCopy"
      @onTask="onTask"
      @toPriceMonitor="toPriceMonitor"
    >
    </ka-bargain-page>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {BargainListVo} from "@Abdisalaam/b2c-be-bargain-sdk-i18n/lib/vos/bargainList/bargainListVo";
import {BargainDomain} from "@/service";
import {ROUTES} from "@/router";
import {toDeductionDetails} from "@/constants/busi/BusiConstants";

@Component
export default class YbBargainPage extends Vue {
  // service
  private service = BargainDomain;
  /**
   * 新增砍价
   * @public
   */
  private onAdd(mode: number){
    console.log("~~", mode, `${mode}`);
    this.$router.push({
      name: ROUTES.BARGAIN_ADD.name,
      params: {
        activityMode: String(mode)
      }
    });
  }
  /**
   * 查看详情
   * @public
   */
  private onDetail(data: BargainListVo){
    this.$router.push({
      name: ROUTES.BARGAIN_DETAIL.name,
      params: {
        activityId: String(data.activityId)
      }
    });
  }
  /**
   * 修改
   * @public
   */
  private onEdit(data: BargainListVo){
    this.$router.push({
      name: ROUTES.BARGAIN_EDIT.name,
      params: {
        activityId: String(data.activityId)
      }
    });
  }
  /**
   * 复制
   * @public
   */
  private onCopy(data: BargainListVo){
    this.$router.push({
      name: ROUTES.BARGAIN_COPY.name,
      params: {
        activityId: String(data.activityId)
      }
    });
  }
  /**
   * 查看任务
   * @public
   */
  private onTask(data: BargainListVo){
    this.$router.push({
      name: ROUTES.BARGAIN_TASK_PAGE.name,
      params: {
        activityId: String(data.activityId)
      }
    });
  }

  /**
   * 跳转扣减详情
   * @param data
   * @private
   */
  private toPriceMonitor(data: BargainListVo) {
    toDeductionDetails({
      promoType: (data as any)?.promoType,
      skuId: data?.activitySku?.skuId,
      promoId: data?.promoActId || ''
    })
  }
}
</script>
