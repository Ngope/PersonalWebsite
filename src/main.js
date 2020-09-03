import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css';
import VueTypedJs from 'vue-typed-js'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(VueTypedJs);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount("#app");

