export default {
  getProposals() {
    return JSON.parse(localStorage.getItem('proposals')) || [];
  },
  async loadProposals(context) {
    const proposals = await context.dispatch('getProposals');
    context.commit('loadProposals', proposals);
  },
  async addProposal(context, payload) {
    const proposals = await context.dispatch('getProposals');
    const proposalId = `p${payload.userId}${new Date().getTime()}`;

    payload.proposalId = proposalId;
    proposals.push(payload);

    localStorage.setItem('proposals', JSON.stringify(proposals));
    context.commit('addProposals', payload);
  }
};
