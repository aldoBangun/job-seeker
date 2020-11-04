export default {
  loadJobs(state, payload) {
    state.jobs = payload;
  },
  addJob(state, payload) {
    state.jobs.push(payload);
  }
};
