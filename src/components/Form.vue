<template>
  <form
    @submit.prevent="
      addTodo({text: $event.target.todo.value, category: 'shopping'})
    "
  >
    <label for="todo"></label>
    <input type="text" name="todo" placeholder="Add todo" />
    <input type="submit" value="Add" />
  </form>
</template>

<script>
import { mapActions } from 'vuex';
import { ADD_TODO } from '../store/types';

export default {
  methods: {
    ...mapActions({
      addTodo: ADD_TODO,
    })
  }
};
</script>
