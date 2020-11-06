<template>
  <base-container>
    <h2>stuck</h2>
  </base-container>
</template>

<script>
export default {
  computed: {
    userId() {
      return this.$store.getters.user.userId;
    },
    proposals() {
      return this.$store.getters['proposals/proposals'];
    }
  }
};
</script>

<style scoped></style>
