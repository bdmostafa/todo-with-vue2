<template>
  <nav class="panel">
    <p class="panel-heading">Todos</p>
    <form @submit.prevent="addTodo">
      <div class="panel-block">
        <input
          class="input"
          v-model="newTodo"
          type="text"
          name="newTodo"
          id="newTodo"
          placeholder="Add todo"
        />
        <button
          type="submit"
          class="button is-primary"
          style="position: absolute; right: 62px"
        >
          Add Todo
        </button>
      </div>
    </form>
    <ul>
      <li v-for="todo in todos">
        <div v-if="all">
          <label class="panel-block">
            <input type="checkbox" v-model="todo.completed" />
            <span :class="{ completed: todo.completed }">{{ todo.title }}</span>

            <button
              @click="removeTodo(todo)"
              class="delete"
              style="position: absolute; right: 70px"
            ></button>
          </label>
        </div>

        <div v-else-if="active">
          <label v-if="!todo.completed" class="panel-block">
            <input type="checkbox" v-model="todo.completed" />
            <span :class="{ completed: todo.completed }">{{ todo.title }}</span>

            <button
              @click="removeTodo(todo)"
              class="delete"
              style="position: absolute; right: 70px"
            ></button>
          </label>
        </div>

        <div v-else-if="completed">
          <label v-if="todo.completed" class="panel-block">
            <input type="checkbox" v-model="todo.completed" />
            <span :class="{ completed: todo.completed }">{{ todo.title }}</span>

            <button
              @click="removeTodo(todo)"
              class="delete"
              style="position: absolute; right: 70px"
            ></button>
          </label>
        </div>
      </li>
    </ul>

    <div class="panel-block is-centered">
      <div class="columns">
        <div class="column">
          <button
            @click="allTodos"
            class="button is-link is-outlined is-fullwidth"
          >
            All
          </button>
        </div>
        <div class="column">
          <button
            @click="activeTodos"
            class="button is-link is-outlined is-fullwidth"
          >
            Active
          </button>
        </div>
        <div class="column">
          <button
            @click="completedTodos"
            class="button is-link is-outlined is-fullwidth"
          >
            Completed
          </button>
        </div>
        <div class="column">
          <button
            @click="allDone"
            type="button"
            class="button is-link is-outlined is-fullwidth"
          >
            All Done
          </button>
        </div>
        <div class="column">
          <button
            @click="clearAllCompleted"
            class="button is-link is-outlined is-fullwidth"
          >
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'Todo',

  // data () {
  //   return {
  //     newTodo: '',
  //     todos: [],
  //     all: true,
  //     active: false,
  //     completed: false
  //   }
  // },
  computed: {
    // newTodo: {
    //   get () {
    //     return this.$store.state.newTodo
    //   },
    //   set (value) {
    //     this.$store.commit('addTodo', value)
    //   }
    // },
    todos () {
      return this.$store.state.todos
    },
    // newTodo () {
    //   return this.$store.getters.newTodo
    // },
    // all () {
    //   return this.$store.getters.all
    // },
    // active () {
    //   return this.$store.getters.active
    // },
    // completed () {
    //   return this.$store.getters.completed
    // }
    ...mapGetters([
      'newTodo',
      'all',
      'active',
      'completed'
    ])
  },
  methods: {
    ...mapActions([
      'addTodo',
      'removeTodo',
      'allTodos',
      'activeTodos',
      'completedTodos',
      'allDone',
      'clearAllCompleted'
    ])
    // addTodo () {
    //   this.$store.dispatch('addTodo')
    //   this.$store.dispatch('clearInputTodo')
    //   // this.todos.push({
    //   //   title: this.newTodo,
    //   //   completed: false
    //   // })
    //   // this.newTodo = ''
    // },
    // removeTodo (todo) {
    //   this.$store.dispatch('removeTodo', todo)
    //   // const todoIdx = this.todos.indexOf(todo)
    //   // this.todos.splice(todoIdx, 1)
    // },
    // allTodos () {
    //   this.$store.dispatch('allTodos')
    //   // this.all = true
    //   // this.active = false
    //   // this.completed = false
    // },
    // activeTodos () {
    //   this.$store.dispatch('activeTodos')
    //   // this.all = false
    //   // this.active = true
    //   // this.completed = false
    // },
    // completedTodos () {
    //   this.$store.dispatch('completedTodos')
    //   // this.all = false
    //   // this.active = false
    //   // this.completed = true
    // },
    // allDone () {
    //   this.$store.dispatch('allDone')
    //   // this.todos.forEach(todo => (todo.completed = true))
    // },
    // clearAllCompleted () {
    //   this.$store.dispatch('clearAllCompleted')
    //   // const uncompletedTodos = this.todos.filter(todo => !todo.completed)
    //   // this.todos = uncompletedTodos
    // }
  }
}
</script>

<style>
  body {
    padding: 50px;
  }
  .delete-position {
    position: absolute;
    right: 70px;
  }
  .completed {
    text-decoration: line-through;
  }
</style>
