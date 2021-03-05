import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate'
import Registration from './components/Registration.vue'
import Calculator from './components/Calculator.vue';
import revux from 'revux'

Vue.component(Registration);
Vue.use(VueRouter);
Vue.use(Vuelidate);

const routes=[

  {path:'/calculator',component:Calculator}
]

const router= new VueRouter({
  mode: "history",
  routes
});

Vue.config.productionTip = false

new Vue({
  store,
  router:router,
  render: h => h(App),
}).$mount('#app')
