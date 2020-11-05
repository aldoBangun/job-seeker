export default {
  getJobs() {
    return JSON.parse(localStorage.getItem('jobs')) || [];
  },
  async loadJobs(context) {
    const jobs = await context.dispatch('getJobs');

    context.commit('loadJobs', jobs);
  },
  async addJob(context, payload) {
    const jobs = await context.dispatch('getJobs');
    const jobId = `j${payload.userId}${new Date().getTime()}`;
    const newJob = {
      ...payload,
      jobId,
      proposals: []
    };

    context.commit('addJob', newJob);
    jobs.push(newJob);
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }
};
