<template>
  <base-container>
    <ul>
      <RequestItem
        v-for="prop in proposals"
        :key="prop.proposalId"
        :proposal="prop"
      />
    </ul>
  </base-container>
</template>

<script>
import RequestItem from './RequestItem';

export default {
  components: {
    RequestItem
  },
  computed: {
    userId() {
      return this.$store.getters.user.userId;
    },
    jobs() {
      const jobs = this.$store.getters['jobs/jobs'];
      return jobs
        .filter(job => job.userId === this.userId)
        .map(job => job.jobId);
    },
    proposals() {
      const proposals = this.$store.getters['proposals/proposals'];

      return proposals.filter(proposal => {
        if (this.jobs.includes(proposal.jobId)) {
          return proposal;
        }
      });
    }
  }
};
</script>

<style scoped>
ul > * + * {
  margin: 1rem 0 0;
}
</style>
