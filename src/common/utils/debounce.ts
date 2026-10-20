/**
 *  防抖
 * @param fn
 * @param wait
 * @returns {Function}
 */
export default function debounce (fn: Function, wait: number): () => void {
  let timer: number | null = null;
  return () => {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let context: any = this;
    // eslint-disable-next-line prefer-rest-params
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
};
