import Vue from 'vue';
import VueRouter from 'vue-router';
import Content from '../components/Content';
import Home from '../components/Home'

Vue.use(VueRouter);
// Vue.use(VueRouter, Content, Home);

// 配置导出路由
const myRouter = new VueRouter({
  routes: [
    {
      // 路由路径
      path: '/content',
      name: 'content',
      component: Content,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    }
  ]
});


export default myRouter;
