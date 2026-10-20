// sgm

const MONITOR_LEVEL = {
  ERROR: 1,
  WARN: 2,
  INFO: 3
}

/**
 * warn警告上报
 * @param params {code: string, msg: string}
 */
const warnLog = (params= {})=>{
  try {
    window.__sgm__ && window.__sgm__.custom && typeof window.__sgm__.custom === 'function' &&
    params && params.code && params.msg &&
    window.__sgm__.custom({
      type: MONITOR_LEVEL.WARN,
      code: params.code,
      msg: params.msg
    });
  } catch (e) { //
  }
}
/**
 * info信息上报
 * @param params {code: string, msg: string}
 */
const infoLog = (params = {})=>{
  try {
    window.__sgm__ && window.__sgm__.custom && typeof window.__sgm__.custom === 'function' &&
    params && params.code && params.msg &&
    window.__sgm__.custom({
      type: MONITOR_LEVEL.INFO,
      code: params.code,
      msg: params.msg
    });
  } catch (e) { //
  }
}
/**
 * error紧急上报
 * @param params {code: string, msg: string}
 */
const errorLog = (params = {})=>{
  try {
    window.__sgm__ && window.__sgm__.custom && typeof window.__sgm__.custom === 'function' &&
    params && params.code && params.msg &&
    window.__sgm__.custom({
      type: MONITOR_LEVEL.ERROR,
      code: params.code,
      msg: params.msg
    });
  } catch (e) { //
  }
}

const apiLog = (response, apiCode, level) => {
  response && apiCode &&
  Object.keys(apiCode).forEach( key => {
    if (key && response.config.url.indexOf(key) > -1 &&
      apiCode[key] && Object.prototype.toString.call(apiCode[key]) === '[object Object]' && Object.keys(apiCode[key]).length) {
      Object.keys(apiCode[key]).forEach( code => {
        if (code && code === response.status && level) {
          if (level === MONITOR_LEVEL.INFO) {
            infoLog({
              code: code,
              msg: apiCode[key][code]
            })
          }
          if (level === MONITOR_LEVEL.WARN) {
            warnLog({
              code: code,
              msg: apiCode[key][code]
            })
          }
          if (level === MONITOR_LEVEL.ERROR) {
            errorLog({
              code: code,
              msg: apiCode[key][code]
            })
          }
        }
      })
    }
  })
}


/**
 * 业务参数配置
 */

// 前端页面业务监控
const SGM_BIZ_CODE = {

}

// 接口异常监控
const SGM_API_CODE = {
  [MONITOR_LEVEL.ERROR]: {
    // api url名称
    'fastbe/home/index': {
      500: '商家端主接口异常'
    }
  },
  [MONITOR_LEVEL.WARN]: {},
  [MONITOR_LEVEL.INFO]: {},
}


export {
  warnLog,
  infoLog,
  errorLog,
  apiLog,
  SGM_BIZ_CODE,
  SGM_API_CODE,
  MONITOR_LEVEL
}

