import { KaConfigVo } from "@/kaConfig/KaConfigVo";


export const defaultConfig: KaConfigVo = {
  env: 'default',

  main: {

    microDictCode: 'sellerMicroappConfigs',
  
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
