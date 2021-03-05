import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); 
 
export default new Vuex.Store({
 state: {
   history: [],
   username: 'default',
   email: 'default'
 },
 getters: {
   getHistory(state) {
      return state.history
    }
 },
 mutations: {
   setUsername(state,payload) {
     state.username=payload
   },
   setEmail(state,payload){
    state.email=payload
   },
    addToHistory(state, payload) {
      if(state.history.length < 5) {
        state.history.push(payload)
      }
      else {
        state.history.shift()
        state.history.push(payload)
      }
    },
 },
 actions: {}
});