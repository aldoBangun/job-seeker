<template>
  <li>
    <h3>Applicant</h3>
    <p>{{ proposal.name }}</p>
    <h3>Skills</h3>
    <base-badge v-for="skill in user.expertise" :key="skill" :title="skill">
    </base-badge>
    <h3>Message</h3>
    <p>{{ proposal.message }}</p>
    <h3>Applied to your job</h3>
    <p>{{ job.title }}</p>
    <base-button mode="btn-outline">Applicant Details</base-button>
    <base-button> Approve </base-button>
  </li>
</template>

<script>
export default {
  props: {
    proposal: {
      type: Object,
      required: true
    }
  },
  computed: {
    job() {
      const jobs = this.$store.getters['jobs/jobs'];

      return jobs.find(job => job.jobId === this.proposal.jobId);
    },
    user() {
      const users = this.$store.getters.users;

      return users.find(user => user.userId === this.proposal.userId);
    }
  }
};
</script>

<style scoped>
li {
  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--clr-light);
  border: 1px solid var(--clr-lightgray);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
}

li:hover {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
}

li h3::after {
  content: ' :';
}
</style>
