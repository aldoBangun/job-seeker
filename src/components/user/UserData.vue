<template>
  <base-card mode="card-flat" title="Profile">
    <h3>Expertise</h3>
    <p v-if="user.expertise.length">
      <base-badge v-for="skill in user.expertise" :key="skill">
        {{ skill }}
      </base-badge>
    </p>
    <p v-else>No skills were added</p>
    <h3>Bio</h3>
    <p>{{ user.desc || 'No Description' }}</p>
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
