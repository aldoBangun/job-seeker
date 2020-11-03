export default {
  setActiveUser(state, payload) {
    const { email, userId, username } = payload;

    state.email = email;
    state.userId = userId;
    state.username = username;
  }
};
