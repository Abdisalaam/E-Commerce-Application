export function hasClass(el: HTMLElement, className: string): boolean {
  const reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function addClass(el: HTMLElement, className: string): void {
  if (hasClass(el, className)) {
    return
  }
  const newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function removeClass(el: HTMLElement, className: string): void {
  if (!hasClass(el, className)) {
    return
  }
  const reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
  el.className = el.className.replace(reg, ' ')
}

export function goTop(top = 0) {
  if (document.documentElement && document.documentElement.scrollTop) {
    document.documentElement.scrollTop = top;
  }
  else if (document.body) {
    document.body.scrollTop = top;
  }
}
