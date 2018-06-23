<template>
  <div id="app">
    <Navbar />
    <Form />
    <Todos />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from './store';
import layout from './store/modules/layout';
import todos from './store/modules/todos';
import Navbar from './components/Navbar.vue';
import Form from './components/Form.vue';
import Todos from './components/Todos.vue';

if (!store.state.layout) store.registerModule('layout', layout);
if (!store.state.todos) store.registerModule('todos', todos);

export default {
  name: 'app',
  components: {
    Navbar,
    Form,
    Todos
  },
  computed: {
    ...mapState([
      'layout'
    ])
  }
};
</script>

<style lang="scss" global>
  .dark-theme {
    background: #333;
    color: #fff;
  }
</style>
