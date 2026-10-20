/**
 * 入参为换肤的css变量，格式为
 * root: {
 *   变量a: 变量a的值
 * }
 * @param rootCss
 */
export const initCssVars = (rootCss: string) => {
  try {
    console.log('parse theme vars start');
    if (rootCss && rootCss.length > 0) {
      let style = `<style>${rootCss}</style>`;
      let ele: Element = document.createElement('div');
      ele.innerHTML = style;
      document.getElementsByTagName('body')[0].appendChild(ele.firstElementChild as Node);
    }
  } catch (e) {
    console.log('parse theme vars error');
  }
};


/**
 * 动态添加linkIcon的方法
 * @param url
 */
export const initLinkIcon = (url: string) => {
  try {
    if (url) {
      let linkNode = document.createElement('link');
      linkNode.type = 'image/x-icon';
      linkNode.rel = 'icon';
      linkNode.href = url;
      document.getElementsByTagName('head')[0].appendChild(linkNode as Node);
    }
  } catch (e) {
    console.log('initLink error', e);
  }
}
