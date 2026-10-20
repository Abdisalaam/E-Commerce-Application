export interface KaConfigVo {
  env: string;
  // 主框架差异
  main: {
    // 字典表查询编码
    microDictCode: string;
    // 是否设置默认页
    isSetDefaultPage: boolean;
    // 图片空间新建分组是否插入到最前面
    newGroupInsertBefore: boolean;
  };
  // 商品模块
  product: {
    // 是否支持VOP商品
    supportVop: boolean;
  };
  // 售后模块
  afs: {
    // 是否支持VOP商品
    supportVop: boolean;
  };
  // 订单模块
  order: {
    // 是否本地生活
    isLoc: boolean;
  };
}
