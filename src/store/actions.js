export default {
  getUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users;
  },
  register(context, payload) {
    const users = context.dispatch('getUsers');
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
  },
  async login(context, payload) {
    const users = await context.dispatch('getUsers');
    const { email, password } = payload;
    const validUser = users.find(user => {
      return user.email === email && user.password === password;
    });

    if (!validUser) {
      throw new Error(
        'Failed to signing in. please check your email or password'
      );
    }

    context.commit('setActiveUser', validUser);
  }
};
