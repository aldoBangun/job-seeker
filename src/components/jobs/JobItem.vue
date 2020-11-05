<template>
  <base-card mode="card-flat" :title="job.title">
    <h3>Applied : {{ job.proposals.length }} times</h3>
    <h3>Skill Requirements:</h3>
    <div class="cat">
      <base-badge v-for="cat in job.categories" :key="cat" :title="cat">
      </base-badge>
    </div>
    <div class="actions">
      <base-button mode="btn-outline" :link="jobDetails">Details</base-button>
      <base-button mode="btn-primary" v-if="job.userId !== userId">
        Apply Now
      </base-button>
    </div>
  </base-card>
</template>

<script>
export default {
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  computed: {
    userId() {
      return this.$store.getters.user.userId;
    },
    jobDetails() {
      return `${this.$route.path}/${this.job.jobId}`;
    }
  },
  methods: {}
};
</script>

<style scoped>
.cat,
.actions {
  display: flex;
  align-items: center;
  gap: 0.25em;
}

.actions {
  /* justify-content: flex-end; */
  gap: 1em;
  margin: 2rem 0 0;
}
</style>
