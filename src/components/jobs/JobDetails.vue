<template>
  <base-container>
    <h2 class="title">Job Details</h2>
    <base-card>
      <h3>{{ job.title }}</h3>
      <p>{{ job.description }}</p>
      <strong>Skill Requirements:</strong>
      <ul>
        <li v-for="cat in job.categories" :key="cat">
          <a
            :href="'https://google.com/search?q=' + cat"
            target="_blank"
            :class="{ match: userSkills.includes(cat) }"
          >
            {{ cat }}
          </a>
        </li>
      </ul>
      <strong>Proposal Submitted</strong>
      <p>{{ job.proposals.length }} proposals are submitted to this job</p>
      <base-button
        mode="btn-primary btn-rounded"
        :link="linkApply"
        v-if="job.userId !== userId"
      >
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
    },
    userSkills() {
      return this.$store.getters.user.expertise;
    },
    userId() {
      return this.$store.getters.user.userId;
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

.match {
  color: var(--clr-primary);
}

.match::after {
  content: ' ✔';
}

li a:hover {
  color: var(--clr-dark);
  text-decoration: underline;
}
</style>
