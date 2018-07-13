<template>
  <ul>
    <h2>Don't forget</h2>
    <li v-for="todo in remainingTodos">
      <span>{{ todo.text }}</span>
      <input
        type="checkbox"
        v-bind:checked="todo.completed"
        @click="completeTodo({ id: todo._id, changes: {completed: true} })"
      >
    </li>
    <h2>Completed</h2>
    <li v-for="todo in completedTodos">
      <span>{{ todo.text }}</span>
      <input
        type="checkbox"
        v-bind:checked="todo.completed"
        @click="completeTodo({ id: todo._id, changes: {completed: false} })"
      >
      <span
        class="todo-delete-button"
        @click="deleteTodo({ id: todo._id })"
      >
        🗑️
      </span>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { COMPLETE_TODO, DELETE_TODO, FETCH_TODOS } from '../store/types';

export default {
  created() {
    this.fetchTodos();
  },
  computed: {
    ...mapGetters([
      'completedTodos',
      'remainingTodos',
    ])
  },
  methods: {
    ...mapActions({
      completeTodo: COMPLETE_TODO,
      deleteTodo: DELETE_TODO,
      fetchTodos: FETCH_TODOS,
    })
  }
};
</script>

<style>
  .todo-delete-button:hover {
    cursor: pointer;
  }
</style>