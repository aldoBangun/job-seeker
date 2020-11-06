import fetchDatas from './modules/utilities/fetchDatas';
import setDatas from './modules/utilities/setDatas';

export default {
  createSession(_, payload) {
    localStorage.setItem('isLoggedIn', payload);
  },
  async loadSession(context) {
    const userId = localStorage.getItem('isLoggedIn');
    if (userId) {
      const users = await fetchDatas('users');
      const validUser = users.find(user => user.userId === userId);

      context.commit('setActiveUser', validUser);
    }
  },
  async register(context, payload) {
    const users = await fetchDatas('users');
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
    context.dispatch('createSession', id);
    setDatas('users', users);

    context.commit('setActiveUser', payload);
  },
  async login(context, payload) {
    const users = await fetchDatas('users');
    const { email, password } = payload;
    const validUser = users.find(user => {
      return user.email === email && user.password === password;
    });

    if (!validUser) {
      throw new Error(
        'Failed to signing in. please check your email or password'
      );
    }

    context.dispatch('createSession', validUser.userId);
    context.commit('setActiveUser', validUser);
  },
  logout(context) {
    const noUser = { username: null, email: null, userId: null };

    context.dispatch('createSession', '');
    context.commit('setActiveUser', noUser);
  },
  async updateUser(context, payload) {
    const users = await fetchDatas('users');

    if (!users.length) {
      throw new Error('Failed to update data. Please try again later');
    }

    const index = users.findIndex(user => user.userId === payload.userId);
    users[index] = payload;

    setDatas('users', users);
    context.commit('setActiveUser', payload);
  }
};
