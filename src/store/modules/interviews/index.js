import mutations from './mutations';
import actions from './actions';

export default {
  namespaced: true,
  state() {
    return {
      interviews: []
    };
  },
  getters: {
    interviews(state) {
      return state.interviews;
    }
  },
  mutations,
  actions
};
