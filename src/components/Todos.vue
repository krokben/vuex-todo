<template>
  <ul>
    <h2>Don't forget</h2>
    <li v-for="todo in remainingTodos">
      <span>{{ todo.name }}</span>
      <input
        type="checkbox"
        v-bind:checked="todo.completed"
        @click="completeTodo(todo.id)"
      >
    </li>
    <h2>Completed</h2>
    <li v-for="todo in completedTodos">
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
import { mapGetters, mapActions } from 'vuex';
import { COMPLETE_TODO } from '../store/types';

export default {
  computed: {
    ...mapGetters([
      'completedTodos',
      'remainingTodos'
    ])
  },
  methods: {
    ...mapActions({
      completeTodo: COMPLETE_TODO
    })
  }
};
</script>
