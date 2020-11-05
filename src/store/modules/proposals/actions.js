function fetchData(data) {
  return JSON.parse(localStorage.getItem(data)) || [];
}

function setData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export default {
  async loadProposals(context) {
    const proposals = await fetchData('proposals');
    context.commit('loadProposals', proposals);
  },
  async addProposal(context, payload) {
    const proposals = await fetchData('proposals');
    const proposalId = `p${payload.userId}${new Date().getTime()}`;
    const jobs = await fetchData('jobs');
    const index = jobs.findIndex(job => job.jobId === payload.jobId);

    payload.proposalId = proposalId;

    jobs[index].proposals.push(proposalId);
    proposals.push(payload);

    setData('jobs', jobs);
    setData('proposals', proposals);
    context.commit('addProposals', payload);
  }
};
