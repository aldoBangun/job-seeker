import fetchDatas from '../utilities/fetchDatas';
import setDatas from '../utilities/setDatas';

export default {
  async loadJobs(context) {
    const jobs = await fetchDatas('jobs');

    context.commit('loadJobs', jobs);
  },
  async addJob(context, payload) {
    const jobs = await fetchDatas('jobs');
    const jobId = `j${payload.userId}${new Date().getTime()}`;
    const newJob = {
      ...payload,
      jobId,
      proposals: []
    };

    context.commit('addJob', newJob);
    jobs.push(newJob);
    setDatas('jobs', jobs);
  }
};
