<template>
  <base-card>
    <h4 v-if="isApplied">You have been applied to this job</h4>
    <h4 v-else>Apply to "{{ job.title }}"</h4>
    <base-button
      mode="btn-block btn-rounded btn-outline"
      v-if="isApplied"
      @click="back"
    >
      Back
    </base-button>
    <base-form @submit.prevent="submitProposal" v-else>
      <div class="form-group">
        <label for="name">name</label>
        <input type="text" id="name" v-model.trim="name" />
      </div>
      <div class="form-group">
        <label for="message">message</label>
        <textarea id="message" v-model.trim="message" rows="4"></textarea>
      </div>
      <base-button mode="btn-block btn-rounded btn-primary">
        Submit Proposal
      </base-button>
    </base-form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      message: '',
      error: 'Login Required. Sign In now?'
    };
  },
  // watch: {
  //   message(current) {
  //     if (current.trim() !== '') {
  //       this.error = 'Login required. Sign in now?';
  //     } else {
  //       this.error = '';
  //     }
  //   },
  //   error(current) {
  //     if (current.trim() !== '') {
  //       console.log(this.error);
  //     }
  //   }
  // },
  computed: {
    userId() {
      return this.$store.getters.user.userId;
    },
    jobId() {
      return this.$route.params.jobId;
    },
    job() {
      const jobs = this.$store.getters['jobs/jobs'];
      const job = jobs.find(j => j.jobId === this.jobId);
      return job;
    },
    isApplied() {
      const proposals = this.$store.getters['proposals/proposals'];
      const proposal = proposals.find(prop => prop.jobId === this.jobId);
      return proposal;
    }
  },
  methods: {
    submitProposal() {
      const { name, message, userId, jobId } = this;
      const proposal = { name, message, userId, jobId };
      if (userId) {
        this.$store.dispatch('proposals/addProposal', proposal);
      } else {
        if (confirm(this.error)) this.$router.replace('/auth');
      }
    },
    back() {
      this.$router.back();
    }
  }
};
</script>
