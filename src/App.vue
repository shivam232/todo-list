<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Message msg="123"/>
  <todo-app />
</template>

<script>
import Message from './components/Message.vue'
import TodoApp from './components/TodoApp.vue'

export default {
  name: 'App',
  components: {
    Message,
    TodoApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
