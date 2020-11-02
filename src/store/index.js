import { createStore } from 'vuex';

import mutations from './mutations';
import actions from './actions';

const store = createStore({
  modules: {},
  state() {
    return {
      email: null,
      userId: null,
      username: null
    };
  },
  getters: {
    email(state) {
      return state.email;
    },
    userId(state) {
      return state.userId;
    },
    username(state) {
      return state.username;
    },
    isAuth(state) {
      const { email, userId } = state;
      return email && userId;
    }
  },
  mutations,
  actions
});

export default store;
