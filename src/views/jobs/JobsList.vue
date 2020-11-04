<template>
  <main>
    <base-container>
      <div class="content">
        <JobItem v-for="job in jobs" :key="job.jobId" :job="job" />
      </div>
    </base-container>
  </main>
</template>

<script>
import JobItem from '../../components/jobs/JobItem';

export default {
  components: {
    JobItem
  },
  computed: {
    jobs() {
      return this.$store.getters['jobs/jobs'];
    }
  }
};
</script>

<style scoped>
main {
  padding: 4rem 0 2rem;
}

.content {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
</style>
