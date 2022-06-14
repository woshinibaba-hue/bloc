export function debounce<T extends Function>(fn: T, delay: number = 500) {
  let timer: number | undefined

  return function (this: any, ...args: any[]) {
    return new Promise((resolve, reject) => {
      if (timer) {
        clearTimeout(timer)
      }

      timer = window.setTimeout(async () => {
        try {
          const res = await fn.apply(this, args)
          return resolve(res)
        } catch (e) {
          return reject(e)
        }
      }, delay)
    })
  }
}
