import Vue from 'vue'
import App from './App.vue'
import Message from './components/Message.vue'

Vue.component('app-message',Message);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
