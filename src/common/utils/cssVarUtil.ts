/**
 * 
 * root: {
 *   
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
 *linkIcon
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
