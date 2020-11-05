import fetchDatas from '../utilities/fetchDatas';
import setDatas from '../utilities/setDatas';

export default {
  async loadProposals(context) {
    const proposals = await fetchDatas('proposals');
    context.commit('loadProposals', proposals);
  },
  async addProposal(context, payload) {
    const proposals = await fetchDatas('proposals');
    const proposalId = `p${payload.userId}${new Date().getTime()}`;
    const jobs = await fetchDatas('jobs');
    const index = jobs.findIndex(job => job.jobId === payload.jobId);

    payload.proposalId = proposalId;

    jobs[index].proposals.push(proposalId);
    proposals.push(payload);

    setDatas('jobs', jobs);
    setDatas('proposals', proposals);
    context.commit('addProposals', payload);
  }
};
