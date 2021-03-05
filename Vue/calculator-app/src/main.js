import Vue from 'vue';
import App from './App.vue';
import Vuelidate from "vuelidate";
import VueRouter from 'vue-router';
import LandingPage from './components/LandingPage.vue';
import Calculator from './components/Calculator.vue';
import store from "./store";


Vue.use(VueRouter);


const routes=[
  {path: '/',component: LandingPage},
  {path: '/calculator',component: Calculator}
];

const router = new VueRouter({
  routes,
  mode:'history'
});

Vue.use(Vuelidate);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
