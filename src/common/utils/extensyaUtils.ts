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
 * Extensya
 * @param params {
 *     userEmail: string; // 
 *     lang: string; //
 *     message: string; // 
 *     target: string; // window.open target name
 *     isOpenWindow: boolean // 
 *     link?: string; //
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

