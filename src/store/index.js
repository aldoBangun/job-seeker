import { createStore } from 'vuex';

import mutations from './mutations';
import actions from './actions';

const store = createStore({
  modules: {},
  state() {
    return {
      user: {
        email: null,
        userId: null,
        username: null
      }
    };
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuth(state) {
      const { email, userId } = state.user;
      return email && userId;
    }
  },
  mutations,
  actions
});

export default store;
