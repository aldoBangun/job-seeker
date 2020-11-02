import { createRouter, createWebHistory } from 'vue-router';

import JobsList from './views/jobs/JobsList.vue';
import NotFound from './views/NotFound.vue';
import UserAuth from './views/auth/UserAuth.vue';
import UserLogin from './components/auth/UserLogin.vue';
import UserRegister from './components/auth/UserRegister.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/jobs' },
    { path: '/jobs', component: JobsList },
    {
      path: '/auth',
      redirect: '/auth/login',
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

export default router;
