import { KaConfigVo } from "@/kaConfig/KaConfigVo";


export const ybConfig: KaConfigVo = {
  env: 'yb',
  
  main: {
 
    microDictCode: 'micConfigSeller',
  
    isSetDefaultPage: true,
  
    newGroupInsertBefore: false
  },

  product: {
    supportVop: true
  },

  afs: {
    supportVop: true
  },

  order: {
   
    isLoc: true
  }
}
