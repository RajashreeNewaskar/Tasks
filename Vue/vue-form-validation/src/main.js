import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import { ValidationProvider, extend } from 'vee-validate';

// Add a rule.
extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
});

// Register it globally
Vue.component('ValidationProvider', ValidationProvider);

Vue.use(Vuelidate);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
