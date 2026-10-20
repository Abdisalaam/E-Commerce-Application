import axios from "axios"
// @ts-ignore
import { Loading } from "@Abdisalaam/rcd";
// @ts-ignore
import CONSTANTS from "../../constants/constants";

const TIMEOUT = 1000 * 60;

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

const instance = axios.create({

  withCredentials: true,

  timeout: TIMEOUT,
  headers: {
 
    "Content-Type": "application/json",

    "Cache-Control": "no-cache"
  }
})

let loading: any

// Element loading-start 
function startLoading (loadingSelector?: string) {
  loading = Loading.service({
    lock: true,
    fullscreen: true,
    target: loadingSelector || CONSTANTS.LOADING_SELECTOR
  })
}

function endLoading () {
  loading.close()
}

let needLoadingRequestCount = 0
export function showFullScreenLoading (loadingSelector?: string) {
  if (needLoadingRequestCount === 0) {
    startLoading(loadingSelector)
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading () {
  if (needLoadingRequestCount <= 0) {
    return
  }
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}


instance.interceptors.request.use(
  (config: any) => {
    if (config.showLoading) {
      showFullScreenLoading(config.loadingSelector)
    }
    setTimeout(() => {
      tryHideFullScreenLoading()
    }, TIMEOUT)
    return config
  },
  err => {
    return Promise.reject(err)
  }
)


instance.interceptors.response.use(
  resp => {
    // @ts-ignore
    if (resp.config.showLoading) {
      tryHideFullScreenLoading()
    }
    const data = resp.data;
    if (data.success === true || resp.status === 200) {
      return data;
    }
    return Promise.reject(data.message)
  },
  err => {
    if (err && err.response && err.response.status && err.response.status === CONSTANTS.NO_LOGIN_CODE) {
      //@ts-ignore
      window.top.location.href = CONSTANTS.LOGIN_PAGE;
    }
    return Promise.reject(err)
  }
)

export default instance;
