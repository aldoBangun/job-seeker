<template>
  <h1>Hello, {{ user.username }}</h1>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['user'])
  }
};
</script>
