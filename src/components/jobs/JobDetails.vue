<template>
  <base-container>
    <h2 class="title">Job Details</h2>
    <base-card>
      <h3>{{ job.title }}</h3>
      <p>{{ job.description }}</p>
      <strong>Skill Requirements:</strong>
      <ul>
        <li v-for="cat in job.categories" :key="cat">
          <a :href="'https://google.com/search?q=' + cat" target="_blank">
            {{ cat }}
          </a>
        </li>
      </ul>
      <strong>Proposal Submitted</strong>
      <p>{{ job.proposals.length }} proposals are submitted to this job</p>
      <base-button mode="btn-primary btn-rounded" :link="linkApply">
        Apply Now
      </base-button>
    </base-card>
  </base-container>
</template>

<script>
export default {
  computed: {
    job() {
      const jobs = this.$store.getters['jobs/jobs'];
      const job = jobs.find(j => j.jobId === this.$route.params.jobId);
      return job;
    },
    linkApply() {
      return `${this.$route.path}/apply-job`;
    }
  }
};
</script>

<style scoped>
.title {
  text-align: center;
}

strong {
  display: block;
}

li a {
  color: var(--clr-darkgray);
}

li a:hover {
  color: var(--clr-dark);
  text-decoration: underline;
}
</style>
