import { App } from "vue";
import Button from "./components/button/Button.vue";
import Typography from "./components/typography/Typography.vue";

export default {
  install(app: App) {
    app.component("dads-button", Button);
    app.component("dads-typography", Typography);
  },
};
