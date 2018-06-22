<template>
  <ul>
    <li v-for="todo in todos">
      <span>{{ todo.name }}</span>
      <input
        type="checkbox"
        v-bind:checked="todo.completed"
        @click="completeTodo(todo.id)"
      >
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex';
import { COMPLETE_TODO } from '../store/types';

export default {
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },
  methods: {
    ...mapActions({
      completeTodo: COMPLETE_TODO
    })
  }
};
</script>
