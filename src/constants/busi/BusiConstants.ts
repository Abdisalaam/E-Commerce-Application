import {Vue} from "vue-property-decorator";


export const CHANGE_PRODUCT_STATUS_ACTION = {
  ON_SHELF: 1,
  OFF_SHELF: 2,
  DELETE: 3,
  RECOVER: 4
}


export const PRODUCT_STATUS = {
  ON_SHELF: 1,
  OFF_SHELF: 2
}


export const toSkuDetail = (skuId: string) => {
  setTimeout(() => {
    window.open(`//www.${Vue.prototype.$globalConfig.outerSecondaryDomain}/product/${skuId}.html`, '_blank')
  })
}


export const toChatWithBuyer = (cAppId: string, userPin: string, venderId: string | number) => {
  setTimeout(() => {
    window.open(`${Vue.prototype.$globalConfig.serviceMainUrl}?cus=${encodeURIComponent(JSON.stringify({
      a: cAppId,
      p: userPin.toLowerCase(),
      v: venderId
    }))}`, "_blank")
  })
}


export const mainScrollTop = () => {
  const mainScrollWrap = document.querySelector(".ka-rcd-menu-content-container-wrap");
  if (mainScrollWrap) {
    mainScrollWrap.scrollTop = 0
  }
}


export interface DeductionVo {
  promoType: string | number;
  skuId: string | number;
  promoId: string | number;
}


export const toDeductionDetails = (params: DeductionVo) => {
  const query = `promoType=${params.promoType}&skuId=${params.skuId}&promoId=${params.promoId}`
  setTimeout(() => {
    window.open(
      `${Vue.prototype.$globalConfig.deductionDetails}${query}`
    );
  })
};

export const SERVICE_TYPE_KEYS = {
  REFUND: 1,
  REFUNDS: 2,
  RENEW_OFFLINE: 3,
  // BACKTRACK: 4//"原返退回"
}

export const SERVICE_STATUS_KEYS = {
  PENDING_REVIEW: 1,//待审核
  TO_BE_RECEIVED: 2,//待收货
  PENDING: 3,//待处理
  FINISH: 4,//已完成
  CLOSE: 5,//已关闭
  CANCEL: 6,//已取消
  PROCESSING: 7//处理中
}

export const STATUS_BTN_KEY = {
  AGREE_APPLY: 'agreeApply',//"通过"
  REJECT_APPLY: 'rejectApply',//"驳回"
  CONFIRM_RECEIPT: 'confirmReceipt',//"确认收货"
  // BACKTRACK: 'backtrack',//"原返退回"
  REFUND: 'refund',//"退款"
  OFFLINE_RENEW: 'offlineRenew',//"线下换新"
  CLOSE: 'close',//"关闭服务单"
  NO_RETURN_ONLY_REFUND: 'noReturnOnlyRefund'//"仅退款"
}

export type BtnItem = {
  name: string;
  type: string;
  text: string;
  plain?: boolean;
}

export type BtnConfig = {
  [key: number]: {
    [key: number]: BtnItem[];
  };
};
//售后按钮（标品）
export const biaopinList: BtnConfig = {
  [SERVICE_TYPE_KEYS.RENEW_OFFLINE]: {
    [SERVICE_STATUS_KEYS.PENDING_REVIEW]: [
      {
        name: STATUS_BTN_KEY.AGREE_APPLY,
        type: "primary",
        text: "通过",
        plain: false
      },
      // {
      //   name: STATUS_BTN_KEY.REFUND,
      //   type: "",
      //   text: "退款",
      //   plain: true,
      // },
      {
        name: STATUS_BTN_KEY.REJECT_APPLY,
        type: "danger",
        text: "驳回",
        plain: true
      }
    ],
    [SERVICE_STATUS_KEYS.TO_BE_RECEIVED]: [
      {
        name: STATUS_BTN_KEY.CONFIRM_RECEIPT,
        type: "primary",
        text: "确认收货",
        plain: true
      }
    ],
    [SERVICE_STATUS_KEYS.PENDING]: [
      {
        name: STATUS_BTN_KEY.OFFLINE_RENEW,
        type: "primary",
        text: "线下换新",
        plain: true
      },
      // {
      //   name: STATUS_BTN_KEY.BACKTRACK,
      //   type: "primary",
      //   text: "原返退回",
      //   plain: true
      // },
      {
        name: STATUS_BTN_KEY.CLOSE,
        type: "text",
        text: "关闭服务单",
        plain: false
      }
    ],
    [SERVICE_STATUS_KEYS.FINISH]: [],
    [SERVICE_STATUS_KEYS.CANCEL]: []
  },
  [SERVICE_TYPE_KEYS.REFUNDS]: {
    [SERVICE_STATUS_KEYS.PENDING_REVIEW]: [
      {
        name: STATUS_BTN_KEY.AGREE_APPLY,
        type: "primary",
        text: "通过",
        plain: false
      },
      {
        name: STATUS_BTN_KEY.REFUND,
        type: "",
        text: "退款",
        plain: true
      },
      {
        name: STATUS_BTN_KEY.REJECT_APPLY,
        type: "dangerous",
        text: "驳回",
        plain: true
      }
    ],
    [SERVICE_STATUS_KEYS.TO_BE_RECEIVED]: [
      {
        name: STATUS_BTN_KEY.CONFIRM_RECEIPT,
        type: "primary",
        text: "确认收货",
        plain: true
      }
    ],
    [SERVICE_STATUS_KEYS.PENDING]: [
      {
        name: STATUS_BTN_KEY.REFUND,
        type: "primary",
        text: "退款",
        plain: true
      },
      // {
      //   name: STATUS_BTN_KEY.BACKTRACK,
      //   type: "primary",
      //   text: "原返退回",
      //   plain: true
      // },
      {
        name: STATUS_BTN_KEY.CLOSE,
        type: "text",
        text: "关闭服务单",
        plain: false
      }
    ],
    [SERVICE_STATUS_KEYS.FINISH]: [],
    [SERVICE_STATUS_KEYS.CANCEL]: []
  }
};

// 店铺状态 0-停用 5-待启用 1-启用
export const SHOP_STATUS = {
  STOP: 0,
  WAIT_START: 5,
  STARTED: 1
}

// 商家类型 0-POP 1-自营
export const SELLER_TYPE = {
  POP: 0,
  SELF_SALE: 401
}

// 任务中心域常量 https://joyspace.zode.sa/sheets/nzyXnGhBb6dxuXJoVsZU
export const TASK_B2C_B_DOMAIN_NO = {
  PRODUCT: "TD0000000004",
  ORDER: "TD0000000006",
  STORE: "TD0000000036"
}

// 任务中心场景常量 https://joyspace.zode.sa/sheets/nzyXnGhBb6dxuXJoVsZU
export const TASK_B2C_B_SCENE_NO = {
  PRODUCT_IMPORT_DRAFT: "TS0000000088", // 商品-导入草稿
  PRODUCT_IMPORT_UPDATE_PRODUCT: "TS0000000175", // 商品-批量导入更新
  ORDER_IMPORT_BATCH_SHIPPING: "TS0000000065", // 订单-批量导入发货
  STORE_IMPORT_STORE_INVENTORY: "TS0000000096" // 门店-批量更新门店库存
}

// 端类型
export const SITE_TYPE = {
  E: "oper",
  B: "seller"
}
