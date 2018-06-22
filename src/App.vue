<template>
  <div id="app">
    <Form />
    <Todos />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import store from './store';
import todos from './store/modules/todos';
import Form from './components/Form.vue';
import Todos from './components/Todos.vue';

if (!store.state.todos) store.registerModule('todos', todos);

export default {
  name: 'app',
  components: {
    Form,
    Todos
  }
};
</script>
