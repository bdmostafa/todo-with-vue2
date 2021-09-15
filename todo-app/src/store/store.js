import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newTodo: '',
    todos: [],
    all: true,
    active: false,
    completed: false
  },
  getters: {
    newTodo: state => state.newTodo,
    all: state => state.all,
    active: state => state.active,
    completed: state => state.completed
  },
  actions: {
    addTodo ({ commit }, payload) {
      commit('ADD_TODO', payload)
    },
    removeTodo ({ commit }, todo) {
      commit('REMOVE_TODO', todo)
    },
    allTodos ({ commit }) {
      commit('ALL_TODOS')
    },
    activeTodos ({ commit }) {
      commit('ACTIVE_TODOS')
    },
    completedTodos ({ commit }) {
      commit('COMPLETED_TODOS')
    },
    allDone ({ commit }) {
      commit('ALL_DONE')
    },
    clearAllCompleted ({ commit }) {
      commit('CLEAR_ALL_COMPLETED')
    },
    clearInputTodo ({ commit }) {
      commit('CLEAR_INPUT_TODO')
    }
  },
  mutations: {
    ADD_TODO (state, payload) {
      console.log(payload)
      state.todos.push({
        title: state.newTodo,
        completed: false
      })
    },
    REMOVE_TODO (state, todo) {
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
    },
    ALL_TODOS (state) {
      state.all = true
      state.active = false
      state.completed = false
    },
    ACTIVE_TODOS (state) {
      state.all = false
      state.active = true
      state.completed = false
    },
    COMPLETED_TODOS (state) {
      state.all = false
      state.active = false
      state.completed = true
    },
    ALL_DONE (state) {
      state.todos.forEach(todo => (todo.completed = true))
    },
    CLEAR_ALL_COMPLETED (state) {
      const uncompletedTodos = state.todos.filter(todo => !todo.completed)
      state.todos = uncompletedTodos
    },
    CLEAR_INPUT_TODO (state) {
      state.newTodo = ''
    }
  }
})
