<template>
  <div class="hello">
    <p>Like learn Vue testing</p>
     <div v-if="showProfile">
        <p id="profile">Profile </p>
     </div>
    <li  v-for="todo in todos" :key="todo.id">
       <p  data-test="todo" :class="todo.completed ? 'completed-todo' : ''">{{todo.text}}</p> 
       <input :data-test="'todo-checkbox' + todo.id" type="checkbox" @change="completedTodo(todo.id)">
    </li>
    <form @submit="addTodo" data-test="form">
        <input data-test="new-todo" v-model="todoText" type="text" />
        <button type="submit">Add Todo</button>
    </form>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'TodoApp',
  data(){
    return {
        todoText: '',
        todos: [
            {
                id: 1,
                text: "Learn Vue Testing",
                completed: false
            }
        ],
        showProfile: true
    }
  },
  methods: {
    addTodo(e){
        e.preventDefault();
        this.todos.push({id: 2, text: this.todoText, completed: false});
    },
    completedTodo(id){
        const index = this.todos.findIndex(item => item.id === id);
        this.todos[index].completed = true;
    }
  }
}
</script>
<style scoped>
.completed-todo {
    color: green;
}
</style>
