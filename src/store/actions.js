export default {
  register(context, payload) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const id = `u${users.length + 1}`;
    const existUser = users.find(user => user.email === payload.email);

    if (existUser) {
      throw new Error('This email has been registered as an account');
    }

    payload.userId = id;
    payload.expertise = [];
    payload.icon = payload.username[0];
    payload.description = null;

    users.push(payload);

    localStorage.setItem('users', JSON.stringify(users));

    context.commit('setActiveUser', payload);
  }
};
