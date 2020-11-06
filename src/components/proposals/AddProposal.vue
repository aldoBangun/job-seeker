<template>
  <base-container>
    <base-dialog title="Unauthorized" v-if="error">
      <h3>{{ error }}</h3>

      <base-button mode="btn-outline btn-rounded" @click="error = null">
        cancel
      </base-button>
      <base-button mode="btn-primary btn-rounded" @click="confirmLogin">
        Sign In
      </base-button>
    </base-dialog>
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
        <div class="form-group" :class="{ error: invalidName }">
          <label for="name">name</label>
          <input type="text" id="name" v-model.trim="name" />
          <small class="error" v-if="invalidName"
            >Name shouldn't be empty</small
          >
        </div>
        <div class="form-group" :class="{ error: invalidMessage }">
          <label for="message">message</label>
          <textarea id="message" v-model.trim="message" rows="4"></textarea>
          <small class="error" v-if="invalidMessage"
            >Please add some message</small
          >
        </div>
        <base-button mode="btn-block btn-rounded btn-primary">
          Submit Proposal
        </base-button>
      </base-form>
    </base-card>
  </base-container>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      message: '',
      invalidName: false,
      invalidMessage: false,
      error: null
    };
  },
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
      const proposal = proposals.find(prop => {
        return prop.userId === this.userId && prop.jobId === this.jobId;
      });
      return proposal;
    }
  },
  methods: {
    async submitProposal() {
      const { name, message, userId, jobId } = this;
      const proposal = { name, message, userId, jobId };
      if (userId) {
        if (name !== '' && message !== '') {
          await this.$store.dispatch('proposals/addProposal', proposal);
          this.$store.dispatch('jobs/loadJobs');
        } else {
          if (name === '') this.invalidName = true;
          if (message === '') this.invalidMessage = true;
        }
      } else {
        this.error = null;
        this.error = 'Login Required. Sign In now?';
      }
    },
    confirmLogin() {
      this.$router.push('/auth');
    },
    back() {
      this.$router.back();
    }
  }
};
</script>
