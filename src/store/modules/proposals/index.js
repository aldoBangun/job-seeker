import mutations from './mutations';
import actions from './actions';

export default {
  namespaced: true,
  state() {
    return {
      proposals: []
    };
  },
  getters: {
    proposals(state) {
      return state.proposals;
    }
  },
  mutations,
  actions
};
