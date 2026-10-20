import { KaConfigVo } from "@/kaConfig/KaConfigVo";

// 
export const ybConfig: KaConfigVo = {
  env: 'yb',
  // 主框架差异
  main: {
    // 字典表查询编码
    microDictCode: 'micConfigSeller',
    // 是否设置默认页
    isSetDefaultPage: true,
    // 图片空间新建分组是否插入到最前面
    newGroupInsertBefore: false
  },
  // 商品模块
  product: {
    supportVop: true
  },
  // 售后模块
  afs: {
    supportVop: true
  },
  //订单模块
  order: {
    // 本地生活
    isLoc: true
  }
}
