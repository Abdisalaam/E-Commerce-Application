/**
 * 
 * @param method
 * @param delay
 * @param duration
 */
export default function throttle (method: Function, delay: number, duration: number): () => void {
  let timer: number | null = null;
  let begin = new Date();
  return () => {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let context: any = this;
    // eslint-disable-next-line prefer-rest-params
    let args = arguments;
    let current = new Date();
    // @ts-ignore
    clearTimeout(timer);
    // @ts-ignore
    if (current - begin >= duration) {
      method.apply(context, args);
      begin = current;
    } else {
      timer = setTimeout(() => {
        method.apply(context, args);
      }, delay);
    }
  }
}