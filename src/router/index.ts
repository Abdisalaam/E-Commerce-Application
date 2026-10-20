import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"

Vue.use(VueRouter)

export const ROUTES = {
  // 首页
  HOME: {
    path: "/home",
    name: "home"
  },
  // 图片空间
  IMG_ZONE: {
    path: "/media/imageZone",
    name: "imageZone"
  },
  // 视频空间
  VIDEO_ZONE: {
    path: "/media/videoZone",
    name: "videoZone"
  },
  // 图片回收站
  IMG_RECYCLE_BIN: {
    path: "/media/imgRecycleBin",
    name: "imgRecycleBin"
  },
  // 任务中心
  TASK_CENTER: {
    path: "/taskCenter",
    name: "taskCenter"
  },
  // 在售商品列表
  ON_SHELF_WARE: {
    path: "/onShelfWare",
    name: "onShelfWare"
  },
  // 在售商品-新增
  ON_SHELF_WARE_ADD: {
    path: "/onShelfWareAdd",
    name: "onShelfWareAdd"
  },
  // 在售商品-编辑
  ON_SHELF_WARE_EDIT: {
    path: "/onShelfWareEdit",
    name: "onShelfWareEdit"
  },
  // 待售商品列表
  OFF_SHELF_WARE: {
    path: "/offShelfWare",
    name: "offShelfWare"
  },
  // 待售商品-新增
  OFF_SHELF_WARE_ADD: {
    path: "/offShelfWareAdd",
    name: "offShelfWareAdd"
  },
  // 待售商品-编辑
  OFF_SHELF_WARE_EDIT: {
    path: "/offShelfWareEdit",
    name: "offShelfWareEdit"
  },
  // 商品草稿页
  PRODUCT_DRAFT_PAGE: {
    path: "/productDraft",
    name: "productDraft"
  },
  // 商品草稿页-编辑
  PRODUCT_DRAFT_EDIT: {
    path: "/productDraftEdit",
    name: "productDraftEdit"
  },
  // 商品草稿页-复制
  PRODUCT_DRAFT_COPY: {
    path: "/productDraftCopy",
    name: "productDraftCopy"
  },
  // 商品回收站
  RECYCLE_WARE: {
    path: "/recycleWare",
    name: "recycleWare"
  },
  // SKU查询页
  SKU_QUERY_PAGE: {
    path: "/skuQuery",
    name: "skuQuery"
  },
  // 属性管理
  ATTR_WARE: {
    path: "/attrWare",
    name: "attrWare"
  },
  // 商品后门管理
  PRODUCT_BACK_DOOR: {
    path: "/productBackdoor",
    name: "productBackdoor"
  },
  // 库存管理
  STOCK_MANAGE: {
    path: "/stockManage",
    name: "stockManage"
  },
  // 店铺-商家信息-商家基本信息
  VENDER_INFO: {
    path: "/venderInfo",
    name: "venderInfo"
  },
  // 店铺-商家信息-联系人信息
  CONTACT_INFO: {
    path: "/contactInfo",
    name: "contactInfo"
  },
  // 店铺-商家信息-品牌列表
  BRAND_LIST: {
    path: "/brandList",
    name: "brandList"
  },
  // 店铺-店铺管理-品牌资质
  BRAND_CERTIFICATION: {
    path: '/brandCertification',
    name: "brandCertification"
  },
  // 店铺-店铺管理-店铺信息
  SHOP_INFO: {
    path: "/shopInfo",
    name: "shopInfo"
  },
  // 店铺-店铺管理-店内分类
  SHOP_CATEGORY: {
    path: "/shopCategory",
    name: "shopCategory"
  },
  // 商家扣点
  SHOP_COMMISSION: {
    path: "/sellerCommissionManage",
    name: "sellerCommissionManage"
  },
  // 店铺-店铺管理-商家地址管理
  SHOP_VENDER_ADDRESS: {
    path: "/venderAddress",
    name: "venderAddress"
  },
  // 店铺-产品线列表
  SHOP_CATEGORY_BRAND_LIST: {
    path: "/categoryBrandList",
    name: "categoryBrandList"
  },
  // 中间页：商家入驻-待入驻（非商家账号）
  WAIT_SETTLE: {
    path: '/waitSettle',
    name: "waitSettle"
  },
  // 中间页：运营代中
  ZY_SETTLE_IN_ING: {
    path: '/zySettleIng',
    name: "zySettleIng"
  },
  // 中间页：供应商入驻中
  SUPPLIER_SETTLE_IN_ING: {
    path: '/supplierSettleIng',
    name: "supplierSettleIng"
  },
  // 中间页：已入驻为供应商
  HAS_BEEN_A_SUPPLIER: {
    path: '/hasBeenASupplier',
    name: "hasBeenASupplier"
  },
  // 商家入驻-入驻中
  APPLY_SETTLE: {
      path: '/applySettle',
    name: "applySettle"
  },
  // 店铺续签
  SHOP_RENEWAL: {
    path: '/shopRenew',
    name: "shopRenew"
  },
  // 无权限页面
  NO_AUTH_PAGE: {
    path: '/noAuth',
    name: "noAuth"
  },
  // 仓库管理页面
  WAREHOUSE_MANAGE_PAGE: {
    path: '/warehouseManage',
    name: "warehouseManage"
  },
  // 仓库覆盖范围
  WAREHOUSE_COVERAGE_PAGE: {
    path: '/warehouseCoverage',
    name: "warehouseCoverage"
  },
  // 仓库流水管理
  STOCK_STREAM_LIST_PAGE: {
    path: '/stockStreamList',
    name: "stockStreamList"
  },
  // 营销-首页
  MARKETING_HOME: {
    path: '/marketing',
    name: "marketing"
  },
  // 营销-优惠券管理
  COUPON_MANAGE: {
    path: '/couponList',
    name: "couponList"
  },
  // 营销-优惠券管理-新增商品券
  PRODUCT_COUPON_ADD: {
    path: '/productCouponAdd',
    name: "productCouponAdd"
  },
  // 营销-优惠券管理-查看商品券
  PRODUCT_COUPON_DETAIL: {
    path: '/productCouponDetail',
    name: "productCouponDetail"
  },
  // 营销-优惠券管理-新增店铺券
  SHOP_COUPON_ADD: {
    path: '/shopCouponAdd',
    name: "shopCouponAdd"
  },
  // 营销-优惠券管理-查看店铺券
  SHOP_COUPON_DETAIL: {
    path: '/shopCouponDetail',
    name: "shopCouponDetail"
  },
  // 营销-促销活动-单品促销
  PROMO_SINGLE_LIST: {
    path: '/singlePromo',
    name: "singlePromo"
  },
  // 营销-促销活动-新增单品促销
  PROMO_SINGLE_ADD: {
    path: '/addSinglePromo',
    name: "singlePromoAdd"
  },
  // 营销-促销活动-单品促销详情
  PROMO_SINGLE_DETAIL: {
    path: '/viewSinglePromo',
    name: "viewSinglePromo"
  },
  // 营销-促销活动-满元包邮促销
  PROMO_FREE_DELIVERY_LIST: {
    path: '/freeDeliveryPromo',
    name: "freeDeliveryPromo"
  },
  // 营销-促销活动-新增满元包邮促销
  PROMO_FREE_DELIVERY_ADD: {
    path: '/addFreeDeliveryPromo',
    name: "addFreeDeliveryPromo"
  },
  // 营销-促销活动-查看满元包邮促销
  PROMO_FREE_DELIVERY_DETAIL: {
    path: '/viewFreeDeliveryPromo',
    name: "viewFreeDeliveryPromo"
  },
  // 运费
  SHIPPING: {
    path: '/shippingManage',
    name: "shippingManage"
  },
  // 运费模版池
  SHIPPING_TEMPLATE: {
    path: '/shippingTemplateManage',
    name: "shippingTemplateManage"
  },
  // 角色管理
  ROLE_MANAGE: {
    path: '/roleManage',
    name: "roleManage"
  },
  // 账号操作日志
  ACCOUNT_LOG_MANAGE: {
    path: '/accountLogManage',
    name: "accountLogManage"
  },
  ADD_ROLE: {
    path: '/addRole',
    name: "addRole"
  },
  EDIT_ROLE: {
    path: '/editRole',
    name: "editRole"
  },
  BIND_ROLE: {
    path: '/bindRole',
    name: "bindRole"
  },
  // 员工管理
  USER_MANAGE: {
    path: '/userManage',
    name: "userManage"
  },
  ADD_USER: {
    path: '/addUser',
    name: "addUser"
  },
  EDIT_USER: {
    path: '/editUser',
    name: "editUser"
  },
  // 供品方
  GONG_PIN_LIST: {
    path: '/gongPin',
    name: "gongPin"
  },
  // 订单-订单列表
  ORDER_LIST: {
    path: '/orderList',
    name: "orderList"
  },
  // 订单-订单详情
  ORDER_DETAIL: {
    path: '/orderDetail/:orderId',
    name: "orderDetail"
  },
  // JDI订单-订单详情
  JDI_ORDER_DETAIL: {
    path: "/jdiOrderDetail",
    name: "jdiOrderDetail"
  },
  // 售后-售后列表
  AFS_LIST: {
    path: '/afs/afsList',
    name: "afsList"
  },
  // 售后-售后详情
  AFS_DETAIL: {
    path: '/afs/afsDetail',
    name: "afsDetail"
  },
  // 售后-取消单列表
  CANCEL_ORDER_LIST: {
    path: '/afs/cancelOrderList',
    name: "afsList"
  },
  // 售后-取消单详情
  CANCEL_ORDER_DETAIL: {
    path: '/afs/cancelOrderDetail',
    name: "afsDetail"
  },
  // 商家帮助中心（主页：/help/home）
  HELP_SHOP: {
    path: '/help/:pageType',
    name: 'help'
  },
  // 发票管理
  INVOICE_MANAGE: {
    path: '/invoiceAudit',
    name: 'invoiceAudit'
  },
  // 发票详情
  INVOICE_DETAIL: {
    path: '/invoiceDetail',
    name: 'invoiceDetail'
  },
  // // 结算-对账&资金账户管理
  // // 质保金明细
  SETTLEMENT_WARRANTY_DETAILS: {
    path: "/settlement/warrantyDetails",
    name: "warrantyDetails"
  },
  // // 对账明细
  // SETTLEMENT_RECONCILIATION_MANAGE: {
  //   path: "/settlement/reconciliationDetailsList",
  //   name: "reconciliationDetailsList"
  // },
  // 资金账户
  // SETTLEMENT_ACCOUNT_MANAGE: {
  //   path: "/settlement/accountManegeList",
  //   name: "accountManegeList"
  // },
  // // 收支明细
  // SETTLEMENT_INC_EXP: {
  //   path: "/settlement/incomeExpenditureDetailsList",
  //   name: "incomeExpenditureDetailsList"
  // },
  // // 充值记录
  // SETTLEMENT_RECHARGE: {
  //   path: "/settlement/rechargeRecordList",
  //   name: "rechargeRecordList"
  // },
  // // 提现记录
  // SETTLEMENT_WITHDRAWAL: {
  //   path: "/settlement/withdrawalRecordList",
  //   name: "withdrawalRecordList"
  // },
  // 结算-收付费管理
  B_COLLECT_PAY_LIST: {
    path: "/settlement/bCollectPayList",
    name: "bCollectPayList"
  },
  // 结算-收付费管理详情
  B_COLLECT_PAY_DETAIL: {
    path: "/settlement/bCollectPayDetail",
    name: "bCollectPayDetail"
  },
  // // 对账文件
  // SETTLEMENT_RECONCILIATION: {
  //   path: "/settlement/reconciliationFile",
  //   name: "reconciliationFile"
  // },
  // 店铺-商家信息-积分比例设置
  SHOP_INTEGRALPROPORTION: {
    path: "/integralProportionList",
    name: "integralProportionList"
  },
  // 秒杀活动报名
  TB_SUBMIT_MANAGE: {
    path: '/tb/submitManage',
    name: 'submitManage'
  },
  TB_SUBMIT_DETAIL: {
    path: '/tb/submitDetail',
    name: 'submitDetail'
  },
  // 邀请有礼
  INVITE_MANAGE: {
    path: '/invite/list',
    name: 'inviteList'
  },
  INVITE_RECORED: {
    path: '/invite/recordList',
    name: 'inviteRecordList'
  },
  INVITE_DETAIL: {
    path: '/invite/detail',
    name: 'inviteDetail'
  },
  INVITE_ACTIVITY: {
    path: '/invite/activity',
    name: 'inviteActivity'
  },
  // vop卡单
  VOP_MANAGE: {
    path: '/vop/list',
    name: 'vopList'
  },
  VOP_QUERY_SKU_LIST: {
    path: '/vop/querySkuList',
    name: 'vopQuerySkuList'
  },
  VOP_WAITING_PICK_SPU_LIST: {
    path: '/vop/waitingPickSpuList',
    name: 'vopWaitingPickSpuList'
  },
  VOP_WARE_PUBLISH: {
    path: '/vop/warePublish',
    name: 'vopWarePublish'
  },
  VOP_PROFIT_SETTING: {
    path: '/vop/profitSetting',
    name: 'profitSetting'
  },
  // 门店
  STORE_MANAGE: {
    path: '/storeManage',
    name: 'storeManage'
  },
  STORE_ADD: {
    path: '/storeAddPage',
    name: 'storeAddPage'
  },
  STORE_EDIT: {
    path: '/storeEditPage',
    name: 'storeEditPage'
  },
  STORE_DETAIL: {
    path: '/storeDetailPage',
    name: 'storeDetailPage'
  },
  STORE_STOCK_MANAGE: {
    path: '/storeStockManage',
    name: 'storeStockManage'
  },
  STORE_SELF_SET_MANAGE: {
    path: '/selfSetManage',
    name: 'selfSetManage'
  },
  STORE_GROUP_MANAGE: {
    path: '/storeGroupManage',
    name: 'storeGroupManage'
  },
  STORE_TASK: {
    path: '/storeTask',
    name: 'storeTask'
  },
  CONSUME_ORDER_LIST: {
    path: '/consumeOrderList',
    name: 'consumeOrderList'
  },
  CONSUME_ORDER_DETAIL: {
    path: '/consumeOrderDetail/:orderId',
    name: 'consumeOrderDetail'
  },
  // 预售-订单
  PRE_SALE_ORDER: {
    path: '/presaleOrderList',
    name: 'presaleOrderList'
  },
  // 大转盘
  TURNABLE_LIST: {
    path: "/turnable/list",
    name: "turnableList"
  },
  TURNABLE_CREAT_LOTTERY: {
    path: "/turnable/create",
    name: "createLottery"
  },
  TURNABLE_ACTIVITY_DETAIL: {
    path: "/turnable/detail",
    name: "activityDetail"
  },
  TURNABLE_AWARD_RECORD: {
    path: "/turnable/awardRecord",
    name: "awardRecord"
  },
  // 客服插件
  SERIVCE_PLUGIN: {
    path: '/customerServicePlugin',
    name: 'customerServicePlugin'
  },
  // 砍价
  BARGAIN_PAGE: {
    path: '/bargainPage',
    name: 'bargainPage'
  },
  // 砍价-详情
  BARGAIN_DETAIL: {
    path: '/bargainDetail/:activityId',
    name: 'bargainDetail'
  },
  // 砍价-新增
  BARGAIN_ADD: {
    path: '/bargainAdd/:activityMode',
    name: 'bargainAdd'
  },
  // 砍价-编辑
  BARGAIN_EDIT: {
    path: '/bargainEdit/:activityId',
    name: 'bargainEdit'
  },
  // 砍价-复制
  BARGAIN_COPY: {
    path: '/bargainCopy/:activityId',
    name: 'bargainCopy'
  },
  // 砍价-任务页
  BARGAIN_TASK_PAGE: {
    path: '/bargainTaskPage/:activityId',
    name: 'bargainTaskPage'
  },
  // 买赠
  ADD_BUY_GIFT_PAGE: {
    path: '/buyGift',
    name: 'buyGift'
  },
  // 买赠-新增
  ADD_BUY_GIFT_ADD: {
    path: '/buyGift/create',
    name: 'createbuyGift'
  },
  // 买赠-详情
  ADD_BUY_GIFT_DETAIL: {
    path: '/buyGift/detail',
    name: 'buyGiftDetail'
  },
  // 预售
  PRESALE_PAGE: {
    path: '/presale',
    name: 'presale'
  },
  // 预售-新增
  PRESALE_ADD: {
    path: '/presale/create',
    name: 'createPresale'
  },
  // 预售-详情
  PRESALE_DETAIL: {
    path: '/presaleDetail/:presaleId',
    name: 'presaleDetail'
  },
  // 拼团
  GROUP_PAGE: {
    path: '/groupListPage',
    name: 'groupListPage'
  },
  // 拼团-新增
  GROUP_ADD: {
    path: '/group/create',
    name: 'groupCreate'
  },
  // 拼团-详情
  GROUP_DETAIL: {
    path: '/group/detail',
    name: 'groupDetails'
  },
  //优惠满减
  PROMOTION_LIST: {
    path: '/promotionList',
    name: "promotionList"
  },
  //优惠满减详情
  PROMOTION_DETAIL: {
    path: '/promotionDetail',
    name: "promotionDetail"
  },
  //优惠满减报名
  PROMOTION_ENTRY: {
    path: '/promotionEntry',
    name: "promotionEntry"
  },
  // 平台满减
  FULL_REDUCTION_ENROLL: {
    path: '/fullReductionEnroll',
    name: 'fullReductionEnroll'
  },
  // 平台满减详情
  FULL_REDUCTION_ENROLL_DETAIL: {
    path: '/fullReductionEnroll/detail',
    name: 'fullReductionEnrollDetail'
  },
  // 平台满减报名
  FULL_REDUCTION_ENROLL_ENROLL: {
    path: '/fullReductionEnroll/enroll',
    name: 'fullReductionEnrollEnroll'
  },
  MESSAGE_CENTER_MESSAGE_PAGE: {
    path: '/messageCenter/messagePage',
    name: 'messagePage'
  },
  MESSAGE_CENTER_MESSAGE_DETAIL: {
    path: '/messageCenter/messageDetail',
    name: 'messageDetail'
  },
  MESSAGE_CENTER_MESSAGE_SUBSCRIPTION: {
    path: '/messageCenter/messageSubscription',
    name: 'messageSubscription'
  },
  // 优惠码管理
  COUPON_CODE_MANAGE: {
    path: '/couponCode/couponCodeManage',
    name: 'couponCodeManage'
  },
  // 优惠码创建
  COUPON_CODE_ADD: {
    path: '/couponCode/couponCodeAdd',
    name: 'couponCodeAdd'
  },
  // 优惠码详情
  COUPON_CODE_DETAIL: {
    path: '/couponCode/couponCodeDetail',
    name: 'couponCodeDetail'
  },
  // 结算列表
  SETTLEMENT_LIST: {
    path: '/settlement/settlementList',
    name: 'settlementList'
  },
  // 结算单
  SETTLEMENT_DETAIL: {
    path: '/settlement/settlementDetail',
    name: 'settlementDetail'
  },
  // 结算详情
  SETTLEMENT_ITEM_DETAIL: {
    path: '/settlement/settlementItemDetail',
    name: 'settlementItemDetail'
  },
  // 结算单查询
  SETTLEMENT_QUERY: {
    path: '/settlement/settlementQuery',
    name: 'settlementQuery',
  },
  // 价格变更流水
  PRICE_CHANGE_FLOW_LIST: {
    path: "/price/priceChangeFlowList",
    name: 'priceChangeFlowList'
  },
  // 评价列表
  COMMENT_LIST:{
    path: "/commentList",
    name: "commentList"
  },
  // 评价详情
  COMMENT_DETAIL: {
    path: "/commentDetail",
    name: "commentDetail"
  }
}


const routes: Array<RouteConfig> = [
  {
    path: "/demo",
    name: "demo",
    meta: {
      hideFrame: true,
    },
    component: () => import(/* webpackChunkName: 'Demo' */ '../views/demo/LangDemo.vue')
  },
  {
    path: ROUTES.HOME.path,
    name: ROUTES.HOME.name,
    component: () => import(/* webpackChunkName: "productPublish" */ "../views/home/Home.vue")
  },
  {
    path: ROUTES.SERIVCE_PLUGIN.path,
    name: ROUTES.SERIVCE_PLUGIN.name,
    meta: {
      hideFrame: true,
    },
    component: () => import(/* webpackChunkName: 'servicePlugin' */ '../views/plugin/CustomerServicePlugin.vue')
  },
  {
    path: ROUTES.IMG_ZONE.path,
    name: ROUTES.IMG_ZONE.name,
    component: () => import(/* webpackChunkName: "imageZone" */ "../views/media/ImageZone.vue")
  },
  {
    path: ROUTES.VIDEO_ZONE.path,
    name: ROUTES.VIDEO_ZONE.name,
    component: () => import(/* webpackChunkName: "VideoZone" */ "../views/media/VideoZone.vue")
  },
  {
    path: ROUTES.IMG_RECYCLE_BIN.path,
    name: ROUTES.IMG_RECYCLE_BIN.name,
    component: () => import(/* webpackChunkName: "ImgRecycleBin" */ "../views/media/ImgRecycleBin.vue")
  },
  {
    path: ROUTES.TASK_CENTER.path,
    name: ROUTES.TASK_CENTER.name,
    component: () => import(/* webpackChunkName: "taskCenter" */ "../views/taskCenter/TaskCenter.vue")
  },
  {
    path: ROUTES.OFF_SHELF_WARE.path,
    name: ROUTES.OFF_SHELF_WARE.name,
    component: () => import(/* webpackChunkName: "onShelfWare" */ "../views/product/OffShelfWare.vue")
  },
  {
    path: ROUTES.OFF_SHELF_WARE_ADD.path,
    name: ROUTES.OFF_SHELF_WARE_ADD.name,
    component: () => import(/* webpackChunkName: "addForOffShelf" */ "../views/product/PublishForOffShelf.vue")
  },
  {
    path: ROUTES.OFF_SHELF_WARE_EDIT.path,
    name: ROUTES.OFF_SHELF_WARE_EDIT.name,
    component: () => import(/* webpackChunkName: "editForOffShelf" */ "../views/product/PublishForOffShelf.vue")
  },
  {
    path: ROUTES.ON_SHELF_WARE.path,
    name: ROUTES.ON_SHELF_WARE.name,
    component: () => import(/* webpackChunkName: "onShelfWare" */ "../views/product/OnShelfWare.vue")
  },
  {
    path: ROUTES.ON_SHELF_WARE_ADD.path,
    name: ROUTES.ON_SHELF_WARE_ADD.name,
    component: () => import(/* webpackChunkName: "addForOnShelf" */ "../views/product/PublishForOnShelf.vue")
  },
  {
    path: ROUTES.ON_SHELF_WARE_EDIT.path,
    name: ROUTES.ON_SHELF_WARE_EDIT.name,
    component: () => import(/* webpackChunkName: "editForOnShelf" */ "../views/product/PublishForOnShelf.vue")
  },
  {
    path: ROUTES.PRODUCT_DRAFT_PAGE.path,
    name: ROUTES.PRODUCT_DRAFT_PAGE.name,
    component: () => import(/* webpackChunkName: "ProductDraftPage" */ "../views/product/draft/ProductDraftPage.vue")
  },
  {
    path: ROUTES.PRODUCT_DRAFT_EDIT.path,
    name: ROUTES.PRODUCT_DRAFT_EDIT.name,
    component: () => import(/* webpackChunkName: "ProductDraftEdit" */ "../views/product/draft/ProductDraftEdit.vue")
  },
  {
    path: ROUTES.PRODUCT_DRAFT_COPY.path,
    name: ROUTES.PRODUCT_DRAFT_COPY.name,
    component: () => import(/* webpackChunkName: "ProductDraftCopy" */ "../views/product/draft/ProductDraftCopy.vue")
  },
  {
    path: ROUTES.RECYCLE_WARE.path,
    name: ROUTES.RECYCLE_WARE.name,
    component: () => import(/* webpackChunkName: "recycleWare" */ "../views/product/RecycleWare.vue")
  },
  {
    path: ROUTES.SKU_QUERY_PAGE.path,
    name: ROUTES.SKU_QUERY_PAGE.name,
    component: () => import(/* webpackChunkName: "SkuQueryPage" */ "../views/product/SkuQueryPage.vue")
  },
  {
    path: ROUTES.ATTR_WARE.path,
    name: ROUTES.ATTR_WARE.name,
    component: () => import(/* webpackChunkName: "attrWare" */ "../views/product/AttrWare.vue")
  },
  {
    path: ROUTES.PRODUCT_BACK_DOOR.path,
    name: ROUTES.PRODUCT_BACK_DOOR.name,
    meta: {
      hideFrame: true,
    },
    component: () => import(/* webpackChunkName: "ProductBackdoor" */ "../views/product/backdoor/ProductBackdoor.vue")
  },
  {
    path: ROUTES.STOCK_MANAGE.path,
    name: ROUTES.STOCK_MANAGE.name,
    component: () => import(/* webpackChunkName: "stockManage" */ "../views/stockManage/StockManage.vue")
  },
  {
    path: ROUTES.VENDER_INFO.path,
    name: ROUTES.VENDER_INFO.name,
    component: () => import(/* webpackChunkName: "venderInfo" */ "../views/shop/VenderInfoNew.vue")
  },
  {
    path: ROUTES.CONTACT_INFO.path,
    name: ROUTES.CONTACT_INFO.name,
    component: () => import(/* webpackChunkName: "contactInfo" */ "../views/shop/ContactInfo.vue")
  },
  {
    path: ROUTES.SHOP_INFO.path,
    name: ROUTES.SHOP_INFO.name,
    component: () => import(/* webpackChunkName: "shopInfo" */ "../views/shop/ShopInfo.vue")
  },
  {
    path: ROUTES.SHOP_CATEGORY.path,
    name: ROUTES.SHOP_CATEGORY.name,
    component: () => import(/* webpackChunkName: "shopCategory" */ "../views/shop/ShopCategory.vue")
  },
  {
    path: ROUTES.SHOP_COMMISSION.path,
    name: ROUTES.SHOP_COMMISSION.name,
    component: () => import(/* webpackChunkName: "shopCommission" */ "../views/shop/ShopCommission.vue")
  },
  {
    path: ROUTES.SHOP_VENDER_ADDRESS.path,
    name: ROUTES.SHOP_VENDER_ADDRESS.name,
    component: () => import(/* webpackChunkName: "VenderAddress" */ "../views/shop/VenderAddress.vue")
  },
  {
    path: ROUTES.SHOP_CATEGORY_BRAND_LIST.path,
    name: ROUTES.SHOP_CATEGORY_BRAND_LIST.name,
    component: () => import(/* webpackChunkName: "CategoryBrandList" */ "../views/shop/CategoryBrandList.vue")
  },
  {
    path: ROUTES.BRAND_LIST.path,
    name: ROUTES.BRAND_LIST.name,
    component: () => import(/* webpackChunkName: "brandList" */ "../views/shop/BrandList.vue")
  },
  {
    path: ROUTES.BRAND_CERTIFICATION.path,
    name: ROUTES.BRAND_CERTIFICATION.name,
    component: () => import(/* webpackChunkName: 'brandCertification' */ '../views/shop/BrandCertification.vue')
  },
  // 商家入驻中，中间页
  {
    path: ROUTES.WAIT_SETTLE.path,
    name: ROUTES.WAIT_SETTLE.name,
    meta: {
      hideFrame: true,
    },
    component: () => import(/* webpackChunkName: 'waitSettle' */ '../views/middlePage/WaitSettle.vue')
  },
  // 商家入驻中，中间页
  {
    path: ROUTES.ZY_SETTLE_IN_ING.path,
    name: ROUTES.ZY_SETTLE_IN_ING.name,
    meta: {
      hideFrame: true,
    },
    component: () => import(/* webpackChunkName: 'ZySettleIng' */ '../views/middlePage/ZySettleIng.vue')
  },
  // 供应商入驻中，中间页
  {
    path: ROUTES.SUPPLIER_SETTLE_IN_ING.path,
    name: ROUTES.SUPPLIER_SETTLE_IN_ING.name,
    meta: {
      hideFrame: true,
    },
    component: () => import(/* webpackChunkName: 'SupplierSettleIng' */ '../views/middlePage/SupplierSettleIng.vue')
  },
  // 已成为供应商，中间页
  {
    path: ROUTES.HAS_BEEN_A_SUPPLIER.path,
    name: ROUTES.HAS_BEEN_A_SUPPLIER.name,
    meta: {
      hideFrame: true,
    },
    component: () => import(/* webpackChunkName: 'HasBeenASupplier' */ '../views/middlePage/HasBeenASupplier.vue')
  },
  {
    path: ROUTES.APPLY_SETTLE.path,
    name: ROUTES.APPLY_SETTLE.name,
    meta: {
      hideFrame: true,
    },
    component: () => import(/* webpackChunkName: 'applySettle' */ '../views/applySettle/index.vue')
  },
  {
    path: ROUTES.SHOP_RENEWAL.path,
    name: ROUTES.SHOP_RENEWAL.name,
    meta: {
      hideFrame: true,
    },
    component: () => import(/* webpackChunkName: 'RenewContract' */ '../views/shopRenew/RenewContract.vue')
  },
  {
    path: ROUTES.WAREHOUSE_MANAGE_PAGE.path,
    name: ROUTES.WAREHOUSE_MANAGE_PAGE.name,
    component: () => import(/* webpackChunkName: 'warehouseManage' */ '../views/stockManage/WarehouseManage.vue')
  },
  {
    path: ROUTES.WAREHOUSE_COVERAGE_PAGE.path,
    name: ROUTES.WAREHOUSE_COVERAGE_PAGE.name,
    component: () => import(/* webpackChunkName: 'WarehouseAddressManage' */ '../views/stockManage/WarehouseAddressManage.vue')
  },
  {
    path: ROUTES.STOCK_STREAM_LIST_PAGE.path,
    name: ROUTES.STOCK_STREAM_LIST_PAGE.name,
    component: () => import(/* webpackChunkName: 'beStockStreamList' */ '../views/stockManage/beStockStreamList.vue')
  },
  {
    path: ROUTES.MARKETING_HOME.path,
    name: ROUTES.MARKETING_HOME.name,
    component: () => import(/* webpackChunkName: 'MarketingHome' */ '../views/marketingHome/MarketingHome.vue')
  },
  {
    path: ROUTES.COUPON_MANAGE.path,
    name: ROUTES.COUPON_MANAGE.name,
    component: () => import(/* webpackChunkName: 'CouponManage' */ '../views/coupon/CouponManage.vue')
  },
  {
    path: ROUTES.PRODUCT_COUPON_ADD.path,
    name: ROUTES.PRODUCT_COUPON_ADD.name,
    component: () => import(/* webpackChunkName: 'ProductCouponAdd' */ '../views/coupon/ProductCouponAdd.vue')
  },
  {
    path: ROUTES.PRODUCT_COUPON_DETAIL.path,
    name: ROUTES.PRODUCT_COUPON_DETAIL.name,
    component: () => import(/* webpackChunkName: 'ProductCouponDetail' */ '../views/coupon/ProductCouponDetail.vue')
  },
  {
    path: ROUTES.SHOP_COUPON_ADD.path,
    name: ROUTES.SHOP_COUPON_ADD.name,
    component: () => import(/* webpackChunkName: 'ShopCouponAdd' */ '../views/coupon/ShopCouponAdd.vue')
  },
  {
    path: ROUTES.SHOP_COUPON_DETAIL.path,
    name: ROUTES.SHOP_COUPON_DETAIL.name,
    component: () => import(/* webpackChunkName: 'ShopCouponDetail' */ '../views/coupon/ShopCouponDetail.vue')
  },
  {
    path: ROUTES.PROMO_SINGLE_LIST.path,
    name: ROUTES.PROMO_SINGLE_LIST.name,
    component: () => import(/* webpackChunkName: 'SinglePromoList' */ '../views/promo/singlePromo/SinglePromoList.vue')
  },
  {
    path: ROUTES.PROMO_SINGLE_ADD.path,
    name: ROUTES.PROMO_SINGLE_ADD.name,
    component: () => import(/* webpackChunkName: 'AddSinglePromo' */ '../views/promo/singlePromo/AddSinglePromo.vue')
  },
  {
    path: ROUTES.PROMO_SINGLE_DETAIL.path,
    name: ROUTES.PROMO_SINGLE_DETAIL.name,
    component: () => import(/* webpackChunkName: 'ViewSinglePromo' */ '../views/promo/singlePromo/ViewSinglePromo.vue')
  },
  {
    path: ROUTES.PROMO_FREE_DELIVERY_LIST.path,
    name: ROUTES.PROMO_FREE_DELIVERY_LIST.name,
    component: () => import(/* webpackChunkName: 'FreeDeliveryPromoList' */ '../views/promo/freeDeliveryPromo/FreeDeliveryPromoList.vue')
  },
  {
    path: ROUTES.PROMO_FREE_DELIVERY_ADD.path,
    name: ROUTES.PROMO_FREE_DELIVERY_ADD.name,
    component: () => import(/* webpackChunkName: 'AddFreeDeliveryPromo' */ '../views/promo/freeDeliveryPromo/AddFreeDeliveryPromo.vue')
  },
  {
    path: ROUTES.PROMO_FREE_DELIVERY_DETAIL.path,
    name: ROUTES.PROMO_FREE_DELIVERY_DETAIL.name,
    component: () => import(/* webpackChunkName: 'ViewFreeDeliveryPromo' */ '../views/promo/freeDeliveryPromo/ViewFreeDeliveryPromo.vue')
  },
  {
    path: ROUTES.SHIPPING.path,
    name: ROUTES.SHIPPING.name,
    component: () => import(/* webpackChunkName: 'shippingManage' */ '../views/shipping/ShippingManage.vue')
  },
  {
    path: ROUTES.SHIPPING_TEMPLATE.path,
    name: ROUTES.SHIPPING_TEMPLATE.name,
    component: () => import(/* webpackChunkName: 'shippingManage' */ '../views/shipping/shipBTemplateManagement.vue')
  },
  {
    path: ROUTES.ROLE_MANAGE.path,
    name: ROUTES.ROLE_MANAGE.name,
    component: () => import(/* webpackChunkName: 'roleManage' */ '../views/account/role/Manage.vue')
  },
  {
    path: ROUTES.ACCOUNT_LOG_MANAGE.path,
    name: ROUTES.ACCOUNT_LOG_MANAGE.name,
    component: () => import(/* webpackChunkName: 'accountLogManage' */ '../views/account/log/AccountLogManage.vue')
  },
  {
    path: ROUTES.ADD_ROLE.path,
    name: ROUTES.ADD_ROLE.name,
    component: () => import(/* webpackChunkName: 'addRole' */ '../views/account/role/Add.vue')
  },
  {
    path: ROUTES.EDIT_ROLE.path,
    name: ROUTES.EDIT_ROLE.name,
    component: () => import(/* webpackChunkName: 'editRole' */ '../views/account/role/Edit.vue')
  },
  {
    path: ROUTES.BIND_ROLE.path,
    name: ROUTES.BIND_ROLE.name,
    component: () => import(/* webpackChunkName: 'bindRole' */ '../views/account/role/Bind.vue')
  },
  {
    path: ROUTES.USER_MANAGE.path,
    name: ROUTES.USER_MANAGE.name,
    component: () => import(/* webpackChunkName: 'userManage' */ '../views/account/user/Manage.vue')
  },
  {
    path: ROUTES.ADD_USER.path,
    name: ROUTES.ADD_USER.name,
    component: () => import(/* webpackChunkName: 'addUser' */ '../views/account/user/Add.vue')
  },
  {
    path: ROUTES.EDIT_USER.path,
    name: ROUTES.EDIT_USER.name,
    component: () => import(/* webpackChunkName: 'editUser' */ '../views/account/user/Edit.vue')
  },
  {
    path: ROUTES.GONG_PIN_LIST.path,
    name: ROUTES.GONG_PIN_LIST.name,
    component: () => import(/* webpackChunkName: 'GongPinManage' */ '../views/account/gongPin/GongPinManage.vue')
  },
  {
    path: ROUTES.ORDER_LIST.path,
    name: ROUTES.ORDER_LIST.name,
    component: () => import(/* webpackChunkName: 'OrderList' */ '../views/order/OrderList.vue')
  },
  {
    path: ROUTES.ORDER_DETAIL.path,
    name: ROUTES.ORDER_DETAIL.name,
    component: () => import(/* webpackChunkName: 'OrderDetail' */ '../views/order/OrderDetail.vue')
  },
  {
    path: ROUTES.JDI_ORDER_DETAIL.path,
    name: ROUTES.JDI_ORDER_DETAIL.name,
    component: () => import(/* webpackChunkName: 'JdiOrderDetail' */ '../views/order/JdiOrderDetail.vue')
  },
  {
    path: ROUTES.AFS_LIST.path,
    name: ROUTES.AFS_LIST.name,
    component: () => import(/* webpackChunkName: 'OrderDetail' */ '../views/afs/afsList/index.vue')
  },
  {
    path: ROUTES.AFS_DETAIL.path,
    name: ROUTES.AFS_DETAIL.name,
    component: () => import(/* webpackChunkName: 'OrderDetail' */ '../views/afs/afsDetail/index.vue')
  },
  {
    path: ROUTES.CANCEL_ORDER_LIST.path,
    name: ROUTES.AFS_DETAIL.name,
    component: () => import(/* webpackChunkName: 'OrderDetail' */ '../views/afs/cancelOrderList/index.vue')
  },
  {
    path: ROUTES.CANCEL_ORDER_DETAIL.path,
    name: ROUTES.CANCEL_ORDER_DETAIL.name,
    component: () => import(/* webpackChunkName: 'OrderDetail' */ '../views/afs/cancelOrderDetail/index.vue')
  },
  {
    path: ROUTES.HELP_SHOP.path,
    name: ROUTES.HELP_SHOP.name,
    meta: {
      hideFrame: true,
    },
    component: () => import(/* webpackChunkName: 'helpShop' */ '../views/helpShop/helpShop.vue')
  },
  {
    path: ROUTES.INVOICE_MANAGE.path,
    name: ROUTES.INVOICE_MANAGE.name,
    component: () => import(/* webpackChunkName: 'invoiceAudit' */ '../views/invoice/B2C/InvoiceAudit.vue')
  },
  {
    path: ROUTES.INVOICE_DETAIL.path,
    name: ROUTES.INVOICE_DETAIL.name,
    component: () => import(/* webpackChunkName: 'invoiceDetail' */ '../views/invoice/B2C/InvoiceDetail.vue')
  },
  {
    path: ROUTES.SHOP_INTEGRALPROPORTION.path,
    name: ROUTES.SHOP_INTEGRALPROPORTION.name,
    component: () => import(/* webpackChunkName: 'integralProportionList' */ '../views/shop/integralProportionList/index.vue')
    // component: () => import(/* webpackChunkName: 'integralProportionList' */ '../views/settlement/settlementList/index.vue')
    // component: () => import(/* webpackChunkName: 'integralProportionList' */ '../views/settlement/settlementDetail/index.vue')
    // component: () => import(/* webpackChunkName: 'integralProportionList' */ '../views/settlement/settlementItemDetail/index.vue')
    // component: () => import(/* webpackChunkName: 'integralProportionList' */ '../views/settlement/settlementQuery/index.vue')
  },
  {
    path: ROUTES.TB_SUBMIT_MANAGE.path,
    name: ROUTES.TB_SUBMIT_MANAGE.name,
    component: () => import(/* webpackChunkName: 'submitManage' */ '../views/tb/submitManage/index.vue')
  },
  {
    path: ROUTES.TB_SUBMIT_DETAIL.path,
    name: ROUTES.TB_SUBMIT_DETAIL.name,
    component: () => import(/* webpackChunkName: 'submitDetail' */ '../views/tb/submitDetail/index.vue')
  },
  {
    path: ROUTES.INVITE_MANAGE.path,
    name: ROUTES.INVITE_MANAGE.name,
    component: () => import(/* webpackChunkName: 'inviteList' */ '../views/invite/inviteList.vue')
  },
  {
    path: ROUTES.INVITE_RECORED.path,
    name: ROUTES.INVITE_RECORED.name,
    component: () => import(/* webpackChunkName: 'inviteRecordList' */ '../views/invite/inviteRecordList.vue')
  },
  {
    path: ROUTES.INVITE_DETAIL.path,
    name: ROUTES.INVITE_DETAIL.name,
    component: () => import(/* webpackChunkName: 'inviteDetail' */ '../views/invite/inviteDetail.vue')
  },
  {
    path: ROUTES.INVITE_ACTIVITY.path,
    name: ROUTES.INVITE_ACTIVITY.name,
    component: () => import(/* webpackChunkName: 'inviteActivity' */ '../views/invite/inviteActivity.vue')
  },
  {
    path: ROUTES.STORE_MANAGE.path,
    name: ROUTES.STORE_MANAGE.name,
    component: () => import(/* webpackChunkName: 'vopList' */ '../views/store/storeManage/index.vue')
  },
  {
    path: ROUTES.STORE_ADD.path,
    name: ROUTES.STORE_ADD.name,
    component: () => import(/* webpackChunkName: 'vopList' */ '../views/store/storeAddPage/index.vue')
  },
  {
    path: ROUTES.STORE_EDIT.path,
    name: ROUTES.STORE_EDIT.name,
    component: () => import(/* webpackChunkName: 'vopList' */ '../views/store/storeEditPage/index.vue')
  },
  {
    path: ROUTES.STORE_DETAIL.path,
    name: ROUTES.STORE_DETAIL.name,
    component: () => import(/* webpackChunkName: 'vopList' */ '../views/store/storeDetailPage/index.vue')
  },
  {
    path: ROUTES.STORE_STOCK_MANAGE.path,
    name: ROUTES.STORE_STOCK_MANAGE.name,
    component: () => import(/* webpackChunkName: 'vopList' */ '../views/store/storeStockManage/index.vue')
  },
  {
    path: ROUTES.STORE_SELF_SET_MANAGE.path,
    name: ROUTES.STORE_SELF_SET_MANAGE.name,
    component: () => import(/* webpackChunkName: 'vopList' */ '../views/store/selfSetManage/index.vue')
  },
  {
    path: ROUTES.STORE_GROUP_MANAGE.path,
    name: ROUTES.STORE_GROUP_MANAGE.name,
    component: () => import(/* webpackChunkName: 'vopList' */ '../views/store/storeGroupManage/index.vue')
  },
  {
    path: ROUTES.STORE_TASK.path,
    name: ROUTES.STORE_TASK.name,
    component: () => import(/* webpackChunkName: 'vopList' */ '../views/store/storeTask/index.vue')
  },
  {
    path: ROUTES.CONSUME_ORDER_LIST.path,
    name: ROUTES.CONSUME_ORDER_LIST.name,
    component: () => import(/* webpackChunkName: 'consumeOrderList' */ '../views/order/ConsumeManage.vue')
  },
  {
    path: ROUTES.CONSUME_ORDER_DETAIL.path,
    name: ROUTES.CONSUME_ORDER_DETAIL.name,
    component: () => import(/* webpackChunkName: 'consumeOrderDetail' */ '../views/order/ConsumeOrderDetail.vue')
  },
  {
    path: ROUTES.TURNABLE_LIST.path,
    name: ROUTES.TURNABLE_LIST.name,
    component: () => import(/* webpackChunkName: 'turnableList' */ '../views/turntable/turntable/index.vue')
  },
  {
    path: ROUTES.TURNABLE_CREAT_LOTTERY.path,
    name: ROUTES.TURNABLE_CREAT_LOTTERY.name,
    component: () => import(/* webpackChunkName: 'turnCreateLottery' */ '../views/turntable/turnCreateLottery/index.vue')
  },
  {
    path: ROUTES.TURNABLE_ACTIVITY_DETAIL.path,
    name: ROUTES.TURNABLE_ACTIVITY_DETAIL.name,
    component: () => import(/* webpackChunkName: 'turnActivityDetail' */ '../views/turntable/turnActivityDetail/index.vue')
  },
  {
    path: ROUTES.TURNABLE_AWARD_RECORD.path,
    name: ROUTES.TURNABLE_AWARD_RECORD.name,
    component: () => import(/* webpackChunkName: 'turnAwardRecord' */ '../views/turntable/turnAwardRecord/index.vue')
  },
  {
    path: ROUTES.BARGAIN_PAGE.path,
    name: ROUTES.BARGAIN_PAGE.name,
    component: () => import(/* webpackChunkName: 'BargainPage' */ '../views/bargain/BargainPage.vue')
  },
  {
    path: ROUTES.BARGAIN_ADD.path,
    name: ROUTES.BARGAIN_ADD.name,
    component: () => import(/* webpackChunkName: 'BargainAdd' */ '../views/bargain/BargainAdd.vue')
  },
  {
    path: ROUTES.BARGAIN_EDIT.path,
    name: ROUTES.BARGAIN_EDIT.name,
    component: () => import(/* webpackChunkName: 'BargainEdit' */ '../views/bargain/BargainEdit.vue')
  },
  {
    path: ROUTES.BARGAIN_COPY.path,
    name: ROUTES.BARGAIN_COPY.name,
    component: () => import(/* webpackChunkName: 'BargainCopy' */ '../views/bargain/BargainCopy.vue')
  },
  {
    path: ROUTES.BARGAIN_DETAIL.path,
    name: ROUTES.BARGAIN_DETAIL.name,
    component: () => import(/* webpackChunkName: 'BargainDetail' */ '../views/bargain/BargainDetail.vue')
  },
  {
    path: ROUTES.BARGAIN_TASK_PAGE.path,
    name: ROUTES.BARGAIN_TASK_PAGE.name,
    component: () => import(/* webpackChunkName: 'BargainTaskPage' */ '../views/bargain/BargainTaskPage.vue')
  },
  {
    path: ROUTES.ADD_BUY_GIFT_PAGE.path,
    name: ROUTES.ADD_BUY_GIFT_PAGE.name,
    component: () => import(/* webpackChunkName: 'buyGiftList' */ '../views/buyGift/buyGiftList.vue')
  },
  {
    path: ROUTES.ADD_BUY_GIFT_ADD.path,
    name: ROUTES.ADD_BUY_GIFT_ADD.name,
    component: () => import(/* webpackChunkName: 'buyGiftCreate' */ '../views/buyGift/buyGiftCreate.vue')
  },
  {
    path: ROUTES.ADD_BUY_GIFT_DETAIL.path,
    name: ROUTES.ADD_BUY_GIFT_DETAIL.name,
    component: () => import(/* webpackChunkName: 'buyGiftDetail' */ '../views/buyGift/buyGiftDetail.vue')
  },
  {
    path: ROUTES.PRESALE_PAGE.path,
    name: ROUTES.PRESALE_PAGE.name,
    component: () => import(/* webpackChunkName: 'PresaleList' */ '../views/presale/presaleList.vue')
  },
  {
    path: ROUTES.PRESALE_ADD.path,
    name: ROUTES.PRESALE_ADD.name,
    component: () => import(/* webpackChunkName: 'PresaleAdd' */ '../views/presale/presaleAdd.vue')
  },
  {
    path: ROUTES.PRESALE_DETAIL.path,
    name: ROUTES.PRESALE_DETAIL.name,
    component: () => import(/* webpackChunkName: 'PresaleDetail' */ '../views/presale/presaleDetail.vue')
  },
  {
    path: ROUTES.PRE_SALE_ORDER.path,
    name: ROUTES.PRE_SALE_ORDER.name,
    component: () => import(/* webpackChunkName: 'PresaleOrder' */ '../views/order/presaleOrder.vue')
  },
  {
    path: ROUTES.GROUP_PAGE.path,
    name: ROUTES.GROUP_PAGE.name,
    component: () => import(/* webpackChunkName: 'GroupListPage' */ '../views/group/groupListPage.vue')
  },
  {
    path: ROUTES.GROUP_ADD.path,
    name: ROUTES.GROUP_ADD.name,
    component: () => import(/* webpackChunkName: 'GroupCreate' */ '../views/group/groupCreate.vue')
  },
  {
    path: ROUTES.GROUP_DETAIL.path,
    name: ROUTES.GROUP_DETAIL.name,
    component: () => import(/* webpackChunkName: 'GroupDetails' */ '../views/group/groupDetails.vue')
  },
  {
    path: ROUTES.FULL_REDUCTION_ENROLL.path,
    name: ROUTES.FULL_REDUCTION_ENROLL.name,
    component: () => import(/* webpackChunkName: 'EnrollList' */ '../views/fullReduction/enrollList/index.vue')
  },
  {
    path: ROUTES.FULL_REDUCTION_ENROLL_DETAIL.path,
    name: ROUTES.FULL_REDUCTION_ENROLL_DETAIL.name,
    component: () => import(/* webpackChunkName: 'EnrollDetail' */ '../views/fullReduction/enrollDetail/index.vue')
  },
  {
    path: ROUTES.FULL_REDUCTION_ENROLL_ENROLL.path,
    name: ROUTES.FULL_REDUCTION_ENROLL_ENROLL.name,
    component: () => import(/* webpackChunkName: 'EnrollActivity' */ '../views/fullReduction/enrollActivity/index.vue')
  },
  {
    path: ROUTES.MESSAGE_CENTER_MESSAGE_PAGE.path,
    name: ROUTES.MESSAGE_CENTER_MESSAGE_PAGE.name,
    component: () => import(/* webpackChunkName: "channelList" */ '../views/messageCenter/messagePage/index.vue')
  },
  {
    path: ROUTES.MESSAGE_CENTER_MESSAGE_DETAIL.path,
    name: ROUTES.MESSAGE_CENTER_MESSAGE_DETAIL.name,
    component: () => import(/* webpackChunkName: "channelList" */ '../views/messageCenter/messageDetail/index.vue')
  },
  {
    path: ROUTES.MESSAGE_CENTER_MESSAGE_SUBSCRIPTION.path,
    name: ROUTES.MESSAGE_CENTER_MESSAGE_SUBSCRIPTION.name,
    component: () => import(/* webpackChunkName: "channelList" */ '../views/messageCenter/messageSubscription/index.vue')
  },
  {
    path: ROUTES.PROMOTION_LIST.path,
    name: ROUTES.PROMOTION_LIST.name,
    component: () => import(/* webpackChunkName: 'promotionList' */ '../views/promotion/promotionList/index.vue')
  },
  {
    path: ROUTES.PROMOTION_DETAIL.path,
    name: ROUTES.PROMOTION_DETAIL.name,
    component: () => import(/* webpackChunkName: 'promotionDetail' */ '../views/promotion/promotionDetail/index.vue')
  },
  {
    path: ROUTES.PROMOTION_ENTRY.path,
    name: ROUTES.PROMOTION_ENTRY.name,
    component: () => import(/* webpackChunkName: 'promotionEntry' */ '../views/promotion/promotionEntry/index.vue')
  },
  {
    path: ROUTES.COUPON_CODE_MANAGE.path,
    name: ROUTES.COUPON_CODE_MANAGE.name,
    component: () => import(/* webpackChunkName: 'couponCodeManage' */ '../views/couponCode/couponCodeManage/index.vue')
  },
  {
    path: ROUTES.COUPON_CODE_ADD.path,
    name: ROUTES.COUPON_CODE_ADD.name,
    component: () => import(/* webpackChunkName: 'couponCodeAdd' */ '../views/couponCode/couponCodeAdd/index.vue')
  },
  {
    path: ROUTES.COUPON_CODE_DETAIL.path,
    name: ROUTES.COUPON_CODE_DETAIL.name,
    component: () => import(/* webpackChunkName: 'couponCodeDetail' */ '../views/couponCode/couponCodeDetail/index.vue')
  },
  {
    path: ROUTES.SETTLEMENT_WARRANTY_DETAILS.path,
    name: ROUTES.SETTLEMENT_WARRANTY_DETAILS.name,
    component: () => import(/* webpackChunkName: 'warrantyDetails' */ '../views/settlement/warrantyDetails/index.vue')
  },
  {
    path: ROUTES.SETTLEMENT_LIST.path,
    name: ROUTES.SETTLEMENT_LIST.name,
    component: () => import(/*webpackChunkName: 'settlementList' */ '../views/settlement/settlementList/index.vue')
  },
  {
    path: ROUTES.SETTLEMENT_DETAIL.path,
    name: ROUTES.SETTLEMENT_DETAIL.name,
    component: () => import(/*webpackChunkName: 'settlementDetail' */ '../views/settlement/settlementDetail/index.vue' )
  },
  {
    path: ROUTES.SETTLEMENT_ITEM_DETAIL.path,
    name: ROUTES.SETTLEMENT_ITEM_DETAIL.name,
    component: () => import(/*webpackChunkName: 'settlementItemDetail' */ '../views/settlement/settlementItemDetail/index.vue' )
  },
  {
    path: ROUTES.SETTLEMENT_QUERY.path,
    name: ROUTES.SETTLEMENT_QUERY.name,
    component: () => import(/*webpackChunkName: 'settlementQuery' */ '../views/settlement/settlementQuery/index.vue' )
  },
  {
    path: ROUTES.B_COLLECT_PAY_LIST.path,
    name: ROUTES.B_COLLECT_PAY_LIST.name,
    component: () => import(/* webpackChunkName: 'bCollectPayList' */ '../views/settlement/bCollectPayList/index.vue')
  },
  {
    path: ROUTES.B_COLLECT_PAY_DETAIL.path,
    name: ROUTES.B_COLLECT_PAY_DETAIL.name,
    component: () => import(/* webpackChunkName: 'bCollectPayDetail' */ '../views/settlement/bCollectPayDetail/index.vue')
  },
  {
    path: ROUTES.PRICE_CHANGE_FLOW_LIST.path,
    name: ROUTES.PRICE_CHANGE_FLOW_LIST.name,
    component: () => import(/* webpackChunkName: 'PriceChangeFlowManage' */ '../views/price/PriceChangeFlowManage.vue')
  },
  {
    path: ROUTES.COMMENT_LIST.path,
    name: ROUTES.COMMENT_LIST.name,
    component: () => import(/* webpackChunkName: 'CommentList' */ '../views/comment/commentList.vue')
  },
  {
    path: ROUTES.COMMENT_DETAIL.path,
    name: ROUTES.COMMENT_DETAIL.name,
    component: () => import(/* webpackChunkName: 'CommentDetail' */ '../views/comment/commentDetail.vue')
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
