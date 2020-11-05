<template>
  <base-card mode="card-flat" title="Proposals">
    <h3>Proposals Submitted</h3>
    <p>{{ proposals.length }} proposal(s)</p>
    <h3>Interviews</h3>
    <p>0</p>
  </base-card>
</template>

<script>
export default {
  computed: {
    userId() {
      return this.$store.getters.user.userId;
    },
    proposals() {
      const proposals = this.$store.getters['proposals/proposals'];
      const userProposals = proposals.filter(
        prop => prop.userId === this.userId
      );
      return userProposals;
    }
  }
};
</script>
