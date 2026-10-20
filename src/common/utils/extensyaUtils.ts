const DEFAULT_EXTENSYA_URL = "https://albarq.extensyaidesk.com/assets/src/extnsyaidesk-sdk.js"

const initExtensyaSdk = (params: {
  link: string;
  onLoad?: Function;
  onError?: Function;
}) => {
  const head = document.getElementsByTagName('head')[0];
  const script = document.createElement('script');
  script.type = "text/javascript";
  script.src = params.link;
  script.onload = () => {
    params?.onLoad?.()
  }
  script.onerror = () => {
    params?.onError?.()
  }
  head.appendChild(script);
}

const handleExtensyaLink = (userEmail: string, lang: string, message: string, target: string, isOpenWindow: boolean) => {
  // @ts-ignore
  window['GLOBAL_EXTENSTA_SDK'] = new ExtNsyALivechat('albarq');
  // @ts-ignore
  window['GLOBAL_EXTENSTA_SDK']?.openLivechatWidget(userEmail, lang, message, target, isOpenWindow);
}


/**
 * 打开三方客服Extensya
 * @param params {
 *     userEmail: string; // 调用SOA接口获取邮箱和手机号，邮箱优先，如果未获取到，传字符串
 *     lang: string; // 语言，根据cookie获取当前语言，传递English 或 Arabic
 *     message: string; // 从postMessage中获取欢迎语
 *     target: string; // window.open target name
 *     isOpenWindow: boolean // 是否打开一个新的窗口 true:是 false:重定向当前窗口
 *     link?: string; // 三方sdk下载地址
 * }
 */
const openExtensyaLink = (params: {
  userEmail?: string;
  lang?: string;
  message?: string;
  target?: string;
  isOpenWindow?: boolean;
  link?: string;
}) => {
  const {
    userEmail = "",
    lang = "",
    message = "",
    target = "",
    isOpenWindow = true,
    link = DEFAULT_EXTENSYA_URL
  } = params;
  // @ts-ignore
  if (window['GLOBAL_EXTENSTA_SDK']) {
    handleExtensyaLink(userEmail, lang, message, target, isOpenWindow)
  } else {
    initExtensyaSdk({
      link: link,
      onLoad: () => {
        handleExtensyaLink(userEmail, lang, message, target, isOpenWindow)
      },
      onError: () => {
        console.error('load extensya sdk error')
      }
    })
  }

}


export default openExtensyaLink;

