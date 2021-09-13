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
  mutations: {
    GET_TODO (state, todo) {
      state.newTodo = todo
    },
    ADD_TODO (state) {
      state.todos.push({
        title: state.newTodo,
        completed: false
      })
    },
    // EDIT_TODO(state, todo) {
    //   var todos = state.todos;
    //   todos.splice(todos.indexOf(todo), 1);
    //   state.todos = todos;
    //   state.newTodo = todo.body;
    // },
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
    }
  },
  actions: {
    getTodo ({ commit }, todo) {
      commit('GET_TODO', todo)
    },
    addTodo ({ commit }) {
      commit('ADD_TODO')
    },
    removeTodo ({ commit }, todo) {
      commit('REMOVE_TODO', todo)
    },
    allTodos ({ commit }) {
      commit('ALL_TODOS')
    },
    activetodos ({ commit }) {
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
    }
  },
  getters: {
    newTodo: state => state.newTodo,
    todos: state => state.todos,
    all: state => state.all,
    active: state => state.active,
    completed: state => state.completed
    //   state.todos.filter(todo => {
    //     return !todo.completed;
    //   }),
    // completedTodos: state =>
    //   state.todos.filter(todo => {
    //     return todo.completed;
    //   })
  }
})
