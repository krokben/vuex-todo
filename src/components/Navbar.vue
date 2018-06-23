<template>
  <nav class="navbar" :class="layout.theme">
    <div>
      <a>Home</a>
      <p>theme is {{ layout.theme }}</p>
    </div>
    <div>
      <a @click="setTheme('light')">Light theme</a>
      <a @click="setTheme('dark')">Dark theme</a>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { SET_THEME } from '../store/types';

export default {
  computed: {
    ...mapState([
      'layout'
    ])
  },
  methods: {
    ...mapActions({
      setTheme: SET_THEME
    })
  }
};
</script>
