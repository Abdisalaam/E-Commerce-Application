<template>
  <div>
    <ka-b-help-shop-page
      :menuInfo="menuInfo"
      :config="config"
      :articleId="articleId"
      :activeCate1Id="activeCate1Id"
      :activeCate2Id="activeCate2Id"
      :componentType="pageType"
      :contentType="contentType"
      @selectMenu="selectMenu"
    >
      <template #footer>
        <div style="text-align: center;color: #CCCCCC;">
          <div>{{i18n.t('helpShop.helpShopText')}}</div>
        </div>
      </template>
    </ka-b-help-shop-page>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { HelpCenterDomain } from "../../service/index";
import { getEnvConfig } from "../../constants/envConfig";
import {TYPE} from "@Abdisalaam/b2c-be-help-center-sdk-i18n/lib/constants/enums";
import i18n from "@/lang/i18n";
import {DEFAULT_LANG, LANG_COOKIE_KEY} from "@/constants/constants";
import {cookieUtil} from "@Abdisalaam/kapaas-common-sdk/lib/utils/cookieUtil";

const ROUTE_ITEM={
  HOME: '/home',
  RULE: '/rule',
  ISSUE: '/issue',
  NOTICE: '/notice'
}

const MAIN_PATH = "/help"
const CONTENT_TYPE = {
  TOP_20: 1,
  CATE2_LIST: 2,
  ARTICLE_LIST: 3,
  ARTICLE_DETAIL: 4,
};

@Component
export default class HelpShop extends Vue {
  private i18n = i18n;
  private image_domains = getEnvConfig().IMAGE_DOMAINS;
  private cookieLang = Vue.prototype.$globalConfig?.defaultLang;
  
  // 内容区域
  private contentType = CONTENT_TYPE.TOP_20;
  private menuInfo = {
    defaultPath: MAIN_PATH + ROUTE_ITEM.HOME,
    logo: this.getLogo()
  }
  private config = {
    HOME: {
      key: "home",
      route: MAIN_PATH + ROUTE_ITEM.HOME,
      name: "首页",
      component: "KaBHomePage",
      props: {
        language: this.cookieLang,
        actions: {
          // 查看更多公告
          toNoticePage: () => {
            // this.$router.push({ path: MAIN_PATH + ROUTE_ITEM.NOTICE });
            const url = location.origin + MAIN_PATH + ROUTE_ITEM.NOTICE
            setTimeout(() => {
              window.open(url)
            });
          },
          toNoticeDetail: this.toNoticeDetail,
          // 查看更多热门问题
          toIssuePage: () => {
            // this.$router.push({ path: MAIN_PATH + ROUTE_ITEM.ISSUE });
            const url = location.origin + MAIN_PATH + ROUTE_ITEM.ISSUE
            setTimeout(() => {
              window.open(url)
            })
          },
          toIssueDetail: this.toIssueDetail,
          // 跳转商家入驻
          toSettlePage: () => {
            // this.$router.push({ path: "/" });
            // todo check 已经入驻了的，跳哪里
            const url = location.origin + '/applySettle'
            setTimeout(() => {
              window.open(url)
            })
          },
          // 跳转平台规则
          toRulePage: () => {
            // this.$router.push({ path: MAIN_PATH + ROUTE_ITEM.RULE });
            const url = location.origin + MAIN_PATH + ROUTE_ITEM.RULE
            setTimeout(() => {
              window.open(url)
            })
          },
        },
        HelpCenterService: HelpCenterDomain,
        imageDomains: this.image_domains,
        settleInfo: {
          title: '商家入驻',
          desc: '总揽开放平台规则，引导商家正向提升，创建良好平台',
          // defaultLogoCom: 'settleInfoLogo',
          logo: require('@/assets/img/settleImg.png')//'//imgdownload.Abdisalaam.sa/da/jfs/t1/3/4/3/28129/62835822E479d01a4/4d8010eb1923d906.png.webp'
        },
        ruleInfo: {
          title: '平台规则',
          desc: '总揽开放平台规则，引导商家正向提升，创建良好平台',
          // defaultLogoCom: 'ruleInfoLogo',
          logo: require('@/assets/img/ruleImg.png')//'//imgdownload.Abdisalaam.sa/da/jfs/t1/1/8/1/33959/62835822E7c513e5f/bea1809cca363fe6.png.webp'
        }
      },
    },
    RULE: {
      key: "rule",
      route: MAIN_PATH + ROUTE_ITEM.RULE,
      name: "平台规则",
      component: "KaBRulePage",
      props: {
        actions: {
          // 点击跳转前20条文章页
          clickToTop20: this.clickToTop20,
          // 点击一级类目
          clickCate1: this.clickCate1,
          // 点击二级类目
          clickCate2: this.clickCate2,
          // 点击文章标题
          clickArticleTitle: this.clickArticleTitle
        },
        type: TYPE.RULE.value,
        HelpCenterService: HelpCenterDomain,
      },
    },
    ISSUE: {
      key: "issue",
      route: MAIN_PATH + ROUTE_ITEM.ISSUE,
      name: "常见问题",
      component: "KaBRulePage",
      props: {
        actions: {
          // 点击跳转前20条文章页
          clickToTop20: this.clickToTop20,
          // 点击一级类目
          clickCate1: this.clickCate1,
          // 点击二级类目
          clickCate2: this.clickCate2,
          // 点击文章标题
          clickArticleTitle: this.clickArticleTitle
        },
        type: TYPE.COMMON.value,
        HelpCenterService: HelpCenterDomain,
      },
    },
    NOTICE: {
      key: "notice",
      route: MAIN_PATH + ROUTE_ITEM.NOTICE,
      name: "平台公告",
      component: "KaBNoticePage",
      props: {
        actions: {
          // 点击到公告列表页
          clickToNoticeList: this.clickToNoticeList,
          // 点击文章标题
          clickArticleTitle: this.clickArticleTitle
        },
        type: TYPE.NOTICE.value,
        HelpCenterService: HelpCenterDomain,
        imageDomains: this.image_domains,
      },
    },
  }

  // 页面Tab类型
  get pageType() {
    const type = this.$route.params.pageType || "home";
    return type;
  }

  get articleId() {
    const type = this.$route.query.id || "";
    return type;
  }

  get activeCate1Id() {
    let cate1 = this.$route.query.cate1Id || ''
    return cate1;
  }

  get activeCate2Id() {
    let cate2 = this.$route.query.cate2Id || ''
    return cate2;
  }

  created() {
    const id = this.$route.query.id || ''
    if(id) {
      this.contentType = CONTENT_TYPE.ARTICLE_DETAIL
    } else if(this.activeCate1Id && !this.activeCate2Id) {
      this.contentType = CONTENT_TYPE.CATE2_LIST
    } else if (this.activeCate1Id && this.activeCate2Id) {
      this.contentType = CONTENT_TYPE.ARTICLE_LIST
    }
    this.config.HOME.props["language"] = cookieUtil.getCookie(LANG_COOKIE_KEY) || Vue.prototype.$globalConfig?.defaultLang || DEFAULT_LANG;
  }

  // 主页去公告详情
  private toNoticeDetail(id: string){
    this.contentType = CONTENT_TYPE.ARTICLE_DETAIL;
    const url = location.origin + MAIN_PATH + ROUTE_ITEM.NOTICE + '?id='+ id
    setTimeout(() => {
      window.open(url)
    })
  }

  // 主页去常见问题详情
  private toIssueDetail(id: string) {
    this.contentType = CONTENT_TYPE.ARTICLE_DETAIL;
    const url = location.origin + MAIN_PATH + ROUTE_ITEM.ISSUE + '?id='+ id
    setTimeout(() => {
      window.open(url)
    })
  }

  private clickToTop20() {
    this.contentType = CONTENT_TYPE.TOP_20;
    if(this.$route.query) {
      this.$router.push({})
    }
  }

  private clickCate1(cate1Id: string) {
    this.contentType = CONTENT_TYPE.CATE2_LIST;
    if(this.$route.query.cate1Id !== cate1Id || this.$route.query.cate2Id) {
      this.$router.push({
        query: {
          cate1Id: cate1Id
        }
      })
    }
  }

  private clickCate2(cate1Id: string, cate2Id: string) {
    this.contentType = CONTENT_TYPE.ARTICLE_LIST;
    if(this.$route.query.cate1Id !== cate1Id || this.$route.query.cate2Id !== cate2Id) {
      this.$router.push({
        query: {cate1Id: cate1Id, cate2Id: cate2Id}
      })
    }
  }

  private clickArticleTitle(articleId: string) {
    this.contentType = CONTENT_TYPE.ARTICLE_DETAIL;
    if(this.$route.query.id !== articleId) {
      this.$router.push({
        // path: '/bRuleDetail',
        query: {id: articleId}
      })
    }
  }

  private clickToNoticeList() {
    this.contentType = CONTENT_TYPE.ARTICLE_LIST;
    this.$router.push({
      path: MAIN_PATH + ROUTE_ITEM.NOTICE
    })
  }

  private selectMenu() {
    this.contentType = CONTENT_TYPE.TOP_20;
  }

  getLogo () {
    if (Vue.prototype.$globalConfig?.logoUrl) {
      return Vue.prototype.$globalConfig?.logoUrl;
    }
    return require('@/assets/img/main-logo.png');
  }

}
</script>
