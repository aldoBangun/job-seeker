import mutations from './mutations';
import actions from './actions';

export default {
  namespaced: true,
  state() {
    return {
      requests: []
    };
  },
  getters: {
    requests(state) {
      return state.requests;
    }
  },
  mutations,
  actions
};
