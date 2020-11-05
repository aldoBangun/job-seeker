<template>
  <base-card mode="card-flat" title="Jobs Info">
    <h3>Job Posted</h3>
    <p>{{ jobs.length }} Job(s)</p>
    <h3>Last Job</h3>
    <p v-if="jobs.length">{{ jobs[jobs.length - 1].title }}</p>
    <p v-else>No Jobs posted yet</p>
  </base-card>
</template>

<script>
export default {
  computed: {
    userId() {
      return this.$store.getters.user.userId;
    },
    jobs() {
      const jobs = this.$store.getters['jobs/jobs'];
      return jobs.filter(job => job.userId === this.userId) || [];
    }
  }
};
</script>
