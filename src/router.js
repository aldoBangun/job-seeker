import { createRouter, createWebHistory } from 'vue-router';

import store from './store/';
import JobsList from './views/jobs/JobsList.vue';
import NotFound from './views/NotFound.vue';
import UserAuth from './views/auth/UserAuth.vue';
import UserLogin from './components/auth/UserLogin.vue';
import UserRegister from './components/auth/UserRegister.vue';
import UserProfile from './views/user/UserProfile.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/jobs' },
    { path: '/jobs', component: JobsList },
    { path: '/profile', component: UserProfile, meta: { needAuth: true } },
    {
      path: '/auth',
      redirect: '/auth/login',
      meta: { needUnauth: true },
      component: UserAuth,
      children: [
        { path: 'login', component: UserLogin },
        { path: 'register', component: UserRegister }
      ]
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active'
});

router.beforeEach((to, _, next) => {
  if (to.meta.needAuth && !store.getters.isAuth) {
    next('/auth');
  } else if (to.meta.needUnauth && store.getters.isAuth) {
    next(false);
  } else {
    next();
  }
});

export default router;
