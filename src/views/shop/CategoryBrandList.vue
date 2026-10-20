<template>
 <KaCategoryBrandList :service="ShopService" :common-service="CommonService" @toExportHistory="toExportHistory"></KaCategoryBrandList>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {CommonDomain, ShopDomain} from "@/service";
import {ROUTES} from "@/router";

@Component
export default class CategoryBrandList extends Vue {
  private ShopService = ShopDomain;
  private CommonService = CommonDomain;

  toExportHistory() {
    const routeData = this.$router.resolve({path: ROUTES.TASK_CENTER.path});
    setTimeout(() => {
      window.open(routeData.href, "_blank");
    })
  }

}
</script>

