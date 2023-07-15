import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//外部包
import ElementUI from "element-ui";
//外部css
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
