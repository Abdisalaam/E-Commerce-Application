import {ElMessage} from "@Abdisalaam/rcd/types/message";
import {MessageBox} from "@Abdisalaam/rcd/types/element-ui";
declare module "*.vue" {
  import Vue from "vue"
  export default Vue
}

// 声明全局方法
declare module "vue/types/vue" {
  interface Vue {
    $message: ElMessage;
    $alert: MessageBox.alert;
    $confirm: MessageBox.confirm;
  }
}
