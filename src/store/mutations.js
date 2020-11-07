export default {
  setActiveUser(state, payload) {
    state.user = payload;
  },
  loadUsers(state, payload) {
    state.users = payload;
  }
};
