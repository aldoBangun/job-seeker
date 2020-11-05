<template>
  <base-card>
    <base-form @submit.prevent="submitProposal">
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
      message: ''
    };
  },
  computed: {
    userId() {
      return this.$store.getters.user.userId;
    },
    jobId() {
      return this.$route.params.jobId;
    }
  },
  methods: {
    submitProposal() {
      const { name, message, userId, jobId } = this;
      const proposal = { name, message, userId, jobId };

      this.$store.dispatch('proposals/addProposal', proposal);
    }
  }
};
</script>
