import mutations from './mutations';
import actions from './actions';

export default {
  namespaced: true,
  state() {
    return {
      jobs: []
    };
  },
  getters: {
    jobs(state) {
      return state.jobs;
    }
  },
  mutations,
  actions
};
