<template>
  <div class="marketing-home">
    <!-- 基础营销 -->
    <div class="module-box" v-if="isShowBaseModule">
      <div class="title">{{ i18n.t("marketingHome.baseMarketing") }}</div>
      <div class="content">
        <template v-for="item in baseList">
          <div
            class="item-box"
            :key="item.code"
            @click="toPage(MARKETING_MENU_CODE[item.code])"
            v-if="isShowCurrentItem(MARKETING_MENU_CODE[item.code])"
          >
            <div class="left">
              <el-image :src="getLogo(item.code)"></el-image>
            </div>
            <div class="right">
              <div class="card-title">{{ item.title }}</div>
              <div class="card-desc">{{ item.desc }}</div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <!-- 互动营销 -->
    <div class="module-box" v-if="isShowHDModule">
      <div class="title">
        {{ i18n.t("marketingHome.interactiveMarketing") }}
      </div>
      <div class="content">
        <template v-for="item in hdList">
          <div
            class="item-box"
            :key="item.code"
            @click="toPage(MARKETING_MENU_CODE[item.code])"
            v-if="isShowCurrentItem(MARKETING_MENU_CODE[item.code])"
          >
            <div class="left">
              <el-image :src="getLogo(item.code)"></el-image>
            </div>
            <div class="right">
              <div class="card-title">{{ item.title }}</div>
              <div class="card-desc">{{ item.desc }}</div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <!-- 联合营销 -->
    <div class="module-box" v-if="isShowLHModule">
      <div class="title">{{ i18n.t("marketingHome.jointMarketing") }}</div>
      <div class="content">
        <template v-for="item in lhList">
          <div
            class="item-box"
            :key="item.code"
            @click="toPage(MARKETING_MENU_CODE[item.code])"
            v-if="isShowCurrentItem(MARKETING_MENU_CODE[item.code])"
          >
            <div class="left">
              <el-image :src="getLogo(item.code)"></el-image>
            </div>
            <div class="right">
              <div class="card-title">{{ item.title }}</div>
              <div class="card-desc">{{ item.desc }}</div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <!-- 促销工具 -->
    <div class="module-box" v-if="isShowCustomerModule">
      <div class="title">{{ i18n.t("marketingHome.promotionTool") }}</div>
      <div class="content">
        <template v-for="item in customerList">
          <div
            class="item-box"
            :key="item.code"
            @click="toPage(MARKETING_MENU_CODE[item.code])"
            v-if="isShowCurrentItem(MARKETING_MENU_CODE[item.code])"
          >
            <div class="left">
              <el-image :src="getLogo(item.code)"></el-image>
            </div>
            <div class="right">
              <div class="card-title">{{ item.title }}</div>
              <div class="card-desc">{{ item.desc }}</div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { MainDomain } from "@/service";
import i18n from "@/lang/i18n";

@Component
export default class MarketingHome extends Vue {
  private i18n = i18n;
  // 菜单code,与jnos上配置的菜单code对应(配置后找到对应的菜单CODE就会渲染出来)
  get MARKETING_MENU_CODE() {
    return {
      // 优惠券
      COUPON: "MARKETING-ACTIVITY-COUPON",
      // 优惠码
      MARKETING_VOUCHER: "MAKETING-VOUCHER",
      // 单品促销
      SINGLE_PROMO: "MARKETING-ACTIVITY-SINGLE",
      // 满元包邮
      FREE_DELIVERY_PROMO: "MARKETING-ACTIVITY-FREEDELIVERY",
      // 裂变券
      INVITE_GIFT: "INVITE-MANAGE",
      // 大转盘
      TURNTABLE_MANAGE2: "TURNTABLE-MANAGE2",
      // 邀请有礼
      INVITE_NEW_GIFT: "INVITE-NEW-MANAGE",
      // 商家砍价
      CUT_PRICE: "MARKETING-BARGAIN",
      // 商家拼团
      GROUP_BUY: "GROUP-MANAGE",
      // 限时秒杀
      SECOND_KILL: "SUBMIT-SECKILL",
      // 平台满减
      FULL_REDUCTION: "FULL-REDUCTION",
      // 平台砍价
      SUBMIT_SLASH: "SUBMIT-SLASH",
      // 平台拼团
      SUBMIT_SHARE_GROUP: "SUBMIT-SHARE-GROUP",
      // 平台预售
      SUBMIT_PRESALE: "SUBMIT-PRESALE",
      // 优惠满减
      FULL_DISCOUNT: "FULL-DISCOUNT",
      // 买赠
      BUY_GIFT: "BUY-GIFT",
      // 商家预售
      PRE_SALE: "PRESALE-MANAGE",
      // 如果菜单码有变化，支持通过配置文件覆盖对应的KEY
      ...Vue.prototype.$globalConfig?.marketingHomeMenuCode,
    };
  }

  // 菜单对应的Logo图
  readonly LOGO_MAP: Record<string, string> = {
    // 优惠券
    COUPON: require("./images/coupon.png"),
    // 优惠码
    MARKETING_VOUCHER: require("./images/coupon-code.png"),
    // 单品促销
    SINGLE_PROMO: require("./images/single-promo.png"),
    // 满元包邮
    FREE_DELIVERY_PROMO: require("./images/free-delivery.png"),
    // 裂变券
    INVITE_GIFT: require("./images/invite-gift.png"),
    // 大转盘
    TURNTABLE_MANAGE2: require("./images/turntable.png"),
    // 邀请有礼
    INVITE_NEW_GIFT: require("./images/invite-gift-new.png"),
    // 商家砍价
    CUT_PRICE: require("./images/cut-price.png"),
    // 商家拼团
    GROUP_BUY: require("./images/group-buy.png"),
    // 限时秒杀
    SECOND_KILL: require("./images/sec-kill.png"),
    // 平台满减
    FULL_REDUCTION: require("./images/full-reduction.png"),
    // 平台砍价
    SUBMIT_SLASH: require("./images/submit-slash.png"),
    // 平台拼团
    SUBMIT_SHARE_GROUP: require("./images/submit-share-group.png"),
    // 平台预售
    SUBMIT_PRESALE: require("./images/submit-presale.png"),
    // 优惠满减
    FULL_DISCOUNT: require("./images/full-discount.png"),
    // 买赠
    BUY_GIFT: require("./images/add-price-buy.png"),
    // 商家预售
    PRE_SALE: require("./images/pre-sale-new.png"),
  };

  // 跳转路由 key为menuCode, value为跳转地址
  private marketingRoutes: Record<string, string> = {};

  // 基础营销列表
  private baseList = [
    {
      code: "SINGLE_PROMO",
      title: this.i18n.t("marketingHome.promo"),
      desc: this.i18n.t("marketingHome.promoDesc"),
    },
    {
      code: "FREE_DELIVERY_PROMO",
      title: this.i18n.t("marketingHome.fullDelivery"),
      desc: this.i18n.t("marketingHome.fullDeliveryDesc"),
    },
    {
      code: "COUPON",
      title: this.i18n.t("marketingHome.coupon"),
      desc: this.i18n.t("marketingHome.couponDesc"),
    },
    {
      code: "MARKETING_VOUCHER",
      title: this.i18n.t("marketingHome.couponCode"),
      desc: this.i18n.t("marketingHome.couponCodeDesc"),
    },
  ];

  // 互动营销列表
  private hdList = [
    {
      code: "INVITE_GIFT",
      title: this.i18n.t("marketingHome.inviteCoupon"),
      desc: this.i18n.t("marketingHome.inviteCouponDesc"),
    },
    // {code: "TURNTABLE_MANAGE2", title: "幸运大转盘", desc: "幸运大转盘抽奖，引爆流量"},
    // {code: "INVITE_NEW_GIFT", title: "邀请有礼", desc: "邀请好友注册下单，拉新复购必备"},
    {
      code: "CUT_PRICE",
      title: this.i18n.t("marketingHome.sellerSlash"),
      desc: this.i18n.t("marketingHome.sellerSlashDesc"),
    },
    {
      code: "GROUP_BUY",
      title: this.i18n.t("marketingHome.sellerGroup"),
      desc: this.i18n.t("marketingHome.sellerGroupDesc"),
    },
    {
      code: "TURNTABLE_MANAGE2",
      title: this.i18n.t("marketingHome.turntable"),
      desc: this.i18n.t("marketingHome.turntableDesc"),
    }
  ];

  // 联合营销列表
  private lhList = [
    {
      code: "SECOND_KILL",
      title: this.i18n.t("marketingHome.secondKill"),
      desc: this.i18n.t("marketingHome.secondKillDesc"),
    },
    {
      code: "FULL_REDUCTION",
      title: this.i18n.t("marketingHome.fullReduce"),
      desc: this.i18n.t("marketingHome.fullReduceDesc"),
    },
    // {code: "SUBMIT_SLASH", title: "平台砍价", desc: "邀请好友砍价低价购买，裂变拉新"},
    // {code: "SUBMIT_SHARE_GROUP", title: "平台拼团", desc: "平台发起的拼团促销"},
    // {code: "SUBMIT_PRESALE", title: "平台预售", desc: "平台级预售活动"},
    // {code: "FULL_DISCOUNT", title: "优惠满减", desc: "优惠满减活动"}
  ];

  // 自定义营销列表
  private customerList = [
    {
      code: "PRE_SALE",
      title: this.i18n.t("marketingHome.sellerPresale"),
      desc: this.i18n.t("marketingHome.sellerPresaleDesc"),
    },
    {
      code: "BUY_GIFT",
      title: this.i18n.t("marketingHome.buyGift"),
      desc: this.i18n.t("marketingHome.buyGiftDesc"),
    },
  ];

  get isShowBaseModule() {
    return this.baseList.some((item: any) => {
      return this.isShowCurrentItem(this.MARKETING_MENU_CODE[item.code]);
    });
  }

  get isShowHDModule() {
    return this.hdList.some((item: any) => {
      return this.isShowCurrentItem(this.MARKETING_MENU_CODE[item.code]);
    });
  }

  get isShowLHModule() {
    return this.lhList.some((item: any) => {
      return this.isShowCurrentItem(this.MARKETING_MENU_CODE[item.code]);
    });
  }

  get isShowCustomerModule() {
    return this.customerList.some((item: any) => {
      return this.isShowCurrentItem(this.MARKETING_MENU_CODE[item.code]);
    });
  }

  created() {
    // 遍历三级菜单
    MainDomain.queryMenu().then((res: any) => {
      if (res?.vo && res.vo.length > 0) {
        (res.vo || []).forEach((menu: any) => {
          if (menu?.children && menu?.children.length > 0) {
            menu?.children.forEach((submenu: any) => {
              if (submenu?.children && submenu?.children.length > 0) {
                submenu?.children.forEach((grandsonMenu: any) => {
                  if (grandsonMenu?.menuCode && grandsonMenu?.menuUrl) {
                    if (
                      Object.values(this.MARKETING_MENU_CODE).includes(
                        grandsonMenu.menuCode
                      )
                    ) {
                      this.$set(
                        this.marketingRoutes,
                        grandsonMenu.menuCode,
                        grandsonMenu.menuUrl
                      );
                    }
                  }
                });
              }
            });
          }
        });
      }
    });
  }

  isShowCurrentItem(code: string) {
    if (this.marketingRoutes && Object.keys(this.marketingRoutes).length > 0) {
      const url = this.marketingRoutes[code];
      return !!url;
    }
    return false;
  }

  toPage(code: string) {
    if (this.marketingRoutes && Object.keys(this.marketingRoutes).length > 0) {
      const url = this.marketingRoutes[code];
      if (url) {
        this.$router.push({
          path: url,
        });
      }
    }
  }

  getLogo(code: string) {
    return this.LOGO_MAP[code];
  }
}
</script>
<style lang="scss" scoped>
.marketing-home {
  background-color: var(--rcd-color-fill-white);
  padding: 24px;
  padding-bottom: 4px;
  border-radius: var(--rcd-border-radius-8x);
  // height: 100%;
  .module-box {
    & + .module-box {
      margin-top: 12px;
    }
    .title {
      font-weight: var(--rcd-font-weight-bold);
      font-size: var(--rcd-font-size-16x);
      line-height: var(--rcd-line-height-24);
      color: var(--rcd-color-text-400);
    }
    .content {
      margin-top: 20px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .item-box {
        cursor: pointer;
        padding: 12px;
        border: 1px solid var(--rcd-color-line-100);
        border-radius: var(--rcd-border-radius-4x);
        display: flex;
        justify-content: flex-start;
        width: 304px;
        margin-right: 20px;
        margin-bottom: 20px;

        &:last-child {
          margin-right: 0;
        }
        @media screen and (max-width: 1500px) {
          &:nth-child(3) {
            margin-right: 0;
          }
        }
        .left {
          border-radius: var(--rcd-border-radius-4x);
          margin-right: 20px;
          width: 76px;
          height: 76px;
        }
        .right {
          display: flex;
          flex: 1;
          flex-direction: column;
          .card-title {
            font-weight: var(--rcd-font-weight-medium);
            font-size: var(--rcd-font-size-16x);
            line-height: var(--rcd-line-height-24);
            color: var(--rcd-color-text-400);
          }
          .card-desc {
            margin-top: 4px;
            font-weight: var(--rcd-font-weight-regular);
            font-size: var(--rcd-font-size-12x);
            line-height: var(--rcd-line-height-18);
            color: var(--rcd-color-text-100);
          }
        }
      }
    }
  }
}
</style>
