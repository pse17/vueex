import Vue from 'vue'
import Router from 'vue-router'
import Rep1 from './components/Rep1'
import App from './App.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/report/:id', component:Rep1},
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App), router
}).$mount('#app')
