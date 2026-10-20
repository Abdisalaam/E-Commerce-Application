import {initializeApp} from "firebase/app";
import {getPerformance} from "firebase/performance";

const getFirebaseConfig = () => {
  return {
    apiKey: "Your Map Key",
    projectId: "zode-mall",
    appId: "1",
  }
}

export const initFirebaseReporter = () => {
  try {
    if (process.env.NODE_ENV === "production" && window.location.host.indexOf('zode.sa') > -1) { // 开发环境不上报数据
      const baseConfig = getFirebaseConfig()
      const app = initializeApp(baseConfig);
      getPerformance(app);
    }
  } catch (error) {
    
  }
}

