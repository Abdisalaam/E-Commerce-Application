import { KaConfigVo } from "@/kaConfig/KaConfigVo";

// 默认标品配置
export const defaultConfig: KaConfigVo = {
  env: 'default',
  // 主框架差异
  main: {
    // 字典表查询编码
    microDictCode: 'sellerMicroappConfigs',
    // 是否设置默认页
    isSetDefaultPage: false,
    // 图片空间新建分组是否插入到最前面
    newGroupInsertBefore: true
  },
  // 商品模块
  product: {
    supportVop: false
  },
  // 售后模块
  afs: {
    supportVop: false
  },
  // 订单模块
  order: {
    // 是否本地生活
    isLoc: true
  }
}
