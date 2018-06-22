<template>
  <ul>
    <li v-for="todo in todos">
      <span>{{ todo.name }}</span>
      <input
        type="checkbox"
        v-bind:checked="todo.completed"
      >
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  }
};
</script>
