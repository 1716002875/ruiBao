import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from 'axios'
import store from './store/index.js'
// 注册toast-弹窗插件
import toast from './common/toast'
// 解决移动端300ms延迟问题
import FastClick from 'fastclick';
//图片懒加载
import Lazyload from 'vue-lazyload';

Vue.use(toast);
FastClick.attach(document.body);
Vue.use(Lazyload,{
  loading:require('assets/img/home/loading.jpg')
});

Vue.config.productionTip = false;
// 事件总线
Vue.prototype.$bus = new Vue();
new Vue({
  router,
  axios,
  store,
  render: h => h(App),
  
}).$mount('#app')
