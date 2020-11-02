import { createStore } from 'vuex';

import mutations from './mutations';
import actions from './actions';

const store = createStore({
  modules: {},
  state() {
    return {};
  },
  getters: {},
  mutations,
  actions
});

export default store;
