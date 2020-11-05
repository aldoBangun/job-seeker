export default {
  loadProposals(state, payload) {
    state.proposals = payload;
  },
  addProposals(state, payload) {
    state.proposals.push(payload);
  }
};
