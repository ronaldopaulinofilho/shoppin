import Vue from 'vue';
import App from "../js/components/App.vue";
import router from "./router";
import "../scss/popup.scss";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from "element-ui/lib/locale/lang/pt-br";
import VueTheMask from "vue-the-mask";
Vue.use(ElementUI, { locale });
Vue.use(VueTheMask);
new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");