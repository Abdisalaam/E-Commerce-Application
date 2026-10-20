let targetLang: any;
// 前端多语言前缀标识，不用于多语言解析，只用于出现异常时，跟后端key做区分
const FRONT_ERR_LANG_PREFIX = "fe.";
export default {
  /**
   *
   * @param {string} lang 当前语言值
   * @param {object} messages
   * e.g.
   * message = {
   *    'en_US': {
   *        greeting: 'Hello'
   *    },
   *    'ar_SA': {
   *        greeting: 'Halo'
   *    },
   *    'zh_CN': {
   *        greeting: '您好'
   *    }
   * }
   */
  init(lang: any, messages: any) {
    if (!messages) {
      return;
    }
    targetLang = Object.prototype.hasOwnProperty.call(messages, lang) ? messages[lang] : undefined;
  },
  /**
   *
   * @param {string} path 带翻译文案的key path
   * @param {object} params 若是带翻译文案中包含参数，可以通过params的方式传值
   */
  t(path: any, params?: any) {
    if (!targetLang || !path) {
      return FRONT_ERR_LANG_PREFIX + path;
    }
    const pathArr = path.split('.');
    let targetLangTemp = targetLang;
    try {
      for (let i = 0; i < pathArr.length; i++) {
        targetLangTemp = targetLangTemp[pathArr[i]];
      }
    } catch (e) {
      return FRONT_ERR_LANG_PREFIX + path;
    }

    const result = this.replaceParams(targetLangTemp, params);
    if (result === null || result === undefined) {
      return FRONT_ERR_LANG_PREFIX + path;
    }
    return result;
  },
  replaceParams(target: string, params: any) {
    if (!target || !params) {
      return target;
    }

    for (let p in params) {
      target = target.replace(new RegExp('{' + p + '}', 'g'), params[p]);
    }
    return target;
  }
};
