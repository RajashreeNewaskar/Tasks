import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); //added as a plugin to vue

export default new Vuex.Store({
    state: {
        todos: [ //this state share among the all components
            {
                title: "todo item a",
                completed: false
            },
            {
                title: "todo item b",
                completed: false
            },
        ] 
    },
    getters:{

    },
    mutations: {
        NEW_TODO(state,todoItem) {
            state.todos.push({
                title: todoItem,
                completed: false
            });
        },
        DELETE_TODO(state,todoItem) {
            let index=state.todos.indexOf(todoItem);
            state.todos.splice(index,1);
        }
    },
    actions:{
        addNewTodoItem({commit},todoItem) {
            commit('NEW_TODO',todoItem)
        },
        deleteToDo({commit},todoItem) {
            commit('DELETE_TODO',todoItem)
        }
    }
});