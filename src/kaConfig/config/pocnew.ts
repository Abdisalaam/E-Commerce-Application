import { KaConfigVo } from "@/kaConfig/KaConfigVo";


export const pocnewConfig: KaConfigVo = {
  env: 'pocnew',

  main: {
    
    microDictCode: 'microappConfigs',
   
    isSetDefaultPage: false,
   
    newGroupInsertBefore: true
  },

  product: {
    supportVop: false
  },

  afs: {
    supportVop: false
  },

  order: {
   
    isLoc: true
  }
}
