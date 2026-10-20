<template>
  <ka-award-record :lottery-service="LotteryService"
                   :point-feature="false"
                   :export-award-record-feature="false"
                   @on-edit-logistic-success="editLogSuccess"
                   @on-export-success="exportSuccess"></ka-award-record>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from "vue-property-decorator";
import { TurntableDomain } from "@/service";

@Component
export default class DemoKaAwardRecord extends Vue {
  private LotteryService = TurntableDomain;

  exportSuccess(data: string){
    try{
      if(data){
        const url = data.split(':')[1]
        window.open(url)
      }
    }catch (e){
      console.log(e)
    }
    console.log('exportSuccess');
  }
  editLogSuccess(){
    console.log('editLogSuccess');
  }
}
</script>
