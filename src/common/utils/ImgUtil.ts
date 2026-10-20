// 图片域名配置
const IMAGE_DOMAIN_CONFIG = [
    "//img10.360buyimg.com/imgzone/",
    "//img11.360buyimg.com/imgzone/",
    "//img12.360buyimg.com/imgzone/",
    "//img13.360buyimg.com/imgzone/",
    "//img14.360buyimg.com/imgzone/"
];

/**
 * 获取图片前缀
 */
function getUrlPrefix (): string {
  return IMAGE_DOMAIN_CONFIG[Math.floor(Math.random() * 4)];
}

/**
 * 是否是绝对 Url
 * @param url
 */
function isAbsoluteURL(url: string): boolean {
  const objExp = new RegExp("^(((https|http)?://)|//)([.0-9a-zA-Z]*.|)", "gi");
  return objExp.test(url) === true;
}

/**
 * 是否是 gif 图片
 * @param url
 */
function isGif(url: string): boolean {
  return /.gif$/.test(url.toLowerCase());
}

/**
 * 是否是 jpg 图片
 * @param url
 */
function isJpg(url: string): boolean {
  return /(.jpg|.jpeg)$/.test(url.toLowerCase());
}

/**
 * 获取图片 cdn 地址
 * @param imgUrl 原图片地址
 * @param w 宽
 * @param h 高
 * @param covertDpg，是否转换图片dpg
 * @returns {*}
 */
function getImgUrl (imgUrl = "", w?: number, h?: number, covertDpg?: boolean): string {
  let _imgUrl;

  if (!imgUrl) {
    return "";
  }

  const isGifImg = isGif(imgUrl);
  const _cdnUrl = getUrlPrefix();
  let _size;
  if (w && h) {
    _size = "s" + w + "x" + h + "_";
  }

  if (isAbsoluteURL(imgUrl)) {
    _imgUrl = imgUrl.replace(/^((http|https):\/\/)/gi, "//");
    if (_size) {
      _imgUrl = imgUrl.replace(`/jfs/`, `/${_size}jfs/`);
    }
  } else if (_size) {
    _imgUrl = _cdnUrl + _size + imgUrl;
  } else {
    _imgUrl = _cdnUrl + imgUrl;
  }
  if (!isGifImg && isJpg(_imgUrl) && covertDpg) {
    _imgUrl = `${_imgUrl}.dpg`;
  }
  return _imgUrl;
}

export default {
  getImgUrl
};
