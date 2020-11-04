<template>
  <base-card mode="card-flat" title="Profile">
    <h3>Expertise</h3>
    <p v-if="user.expertise.length" class="expertise">
      <base-badge v-for="skill in user.expertise" :key="skill" :title="skill">
      </base-badge>
    </p>
    <p v-else>No skills were added</p>
    <h3>Bio</h3>
    <p>{{ user.description || 'No Description' }}</p>
  </base-card>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user;
    }
  }
};
</script>

<style scoped>
.expertise {
  display: flex;
  align-items: center;
  gap: 0.25em;
}
</style>
