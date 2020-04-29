// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import myRouter from './router'

Vue.config.productionTip = false;

// 显示声明使用 myRouter
Vue.use(myRouter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 配置路由
  router: myRouter,
  components: { App },
  template: '<App/>'
});
