import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

//引入main.scss文件
import "./stylesheets/main.scss"

//引入rem.js文件
import "./modules/rem.js"

//引入swiper.min.css样式文件
import 'swiper/dist/css/swiper.min.css'

//引入axios
import axios from "axios"
Vue.prototype.$http = axios;

//引入mint-ui相关的模块
import {Lazyload,InfiniteScroll,Header,Button,Tabbar,TabItem,Cell} from "mint-ui"
Vue.use(Lazyload);
Vue.use(InfiniteScroll);
Vue.component("mt-header",Header);
Vue.component("mt-button",Button);
Vue.component("mt-tabbar", Tabbar);
Vue.component("mt-tab-item", TabItem);
Vue.component("mt-cell", Cell);

import { Card, SubmitBar } from 'vant';
Vue.use(Card);
Vue.use(SubmitBar);

//引入directive
import "./modules/directive"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
