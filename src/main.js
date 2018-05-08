// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import less from 'less'
import 'element-ui/lib/theme-chalk/index.css'
import '@static/css/reset.css'
import echarts from 'echarts'
import jquery from 'jquery'


Vue.use(ElementUI)
Vue.use(less)
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
