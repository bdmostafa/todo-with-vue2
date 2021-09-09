new Vue({
  el: "#app-root",

  data: {
    newTodo: "",
    todos: [],
    all: true,
    active: false,
    completed: false,
  },

  methods: {
    addTodo() {
      this.todos.push({
        title: this.newTodo,
        completed: false,
      });
      this.newTodo = "";
    },
    removeTodo(todo) {
      const todoIdx = this.todos.indexOf(todo);
      this.todos.splice(todoIdx, 1);
    },
    allTodos() {
      this.all = true;
      this.active = false;
      this.completed = false;
    },
    activeTodos() {
      this.all = false;
      this.active = true;
      this.completed = false;
    },
    completedTodos() {
      this.all = false;
      this.active = false;
      this.completed = true;
    },
    allDone() {
      this.todos.forEach((todo) => (todo.completed = true));
    },
    clearAllCompleted() {
      const uncompletedTodos = this.todos.filter((todo) => !todo.completed);
      this.todos = uncompletedTodos;
    },
  },
});
