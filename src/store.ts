import Vue from 'vue';
import Vuex from 'vuex';

import { Todo } from './interfaces/Todo';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        name: 'Todo1',
        completed: true,
      },
    ],
  },
  mutations: {
    removeTodo: (state, payload) => {
      return state.todos = state.todos.filter((todo: Todo) => todo.id !== payload);
    },
    switchTodo: (state, payload) => {
      const todoToSwitch = state.todos.find((todo: Todo) => todo.id === payload);
      return todoToSwitch.completed = !todoToSwitch.completed;
    },
  },
  actions: {
    removeTodo: ({ commit }, payload) => {
      commit('removeTodo', payload);
    },
    switchTodo: ({ commit }, payload) => {
      commit('switchTodo', payload);
    },
  },
  getters: {
    todos: (state) => state.todos,
  },
});
