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
  methods: {
    submitProposal() {
      const { name, message } = this;
      const proposal = { name, message };

      console.log(proposal);
    }
  }
};
</script>
