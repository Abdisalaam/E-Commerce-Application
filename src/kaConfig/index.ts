import { defaultConfig } from "./config/default";
import { ybConfig } from "./config/yb";
import { KaConfigVo } from "@/kaConfig/KaConfigVo";
import { pocnewConfig } from "@/kaConfig/config/pocnew";

export const getKaConfig = (): KaConfigVo => {
  const keCode = process.env.VUE_APP_KA || null;
  switch (keCode) {
    case 'yb':
      return ybConfig;
    case 'pocnew':
      return pocnewConfig;
    default:
      return defaultConfig;
  }
}
