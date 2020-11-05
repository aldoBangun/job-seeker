import { createRouter, createWebHistory } from 'vue-router';

import store from './store/';
import JobsList from './views/jobs/JobsList.vue';
import NotFound from './views/NotFound.vue';
import UserAuth from './views/auth/UserAuth.vue';
import UserLogin from './components/auth/UserLogin.vue';
import UserRegister from './components/auth/UserRegister.vue';
import UserProfile from './views/user/UserProfile.vue';
import JobDetails from './components/jobs/JobDetails.vue';
import AddProposal from './components/proposals/AddProposal.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/jobs' },
    { path: '/jobs', component: JobsList },
    { path: '/jobs/:jobId', component: JobDetails },
    { path: '/jobs/:jobId/apply-job', component: AddProposal },
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
  linkActiveClass: 'active',
  scrollBehavior(_, _z, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  }
});

router.beforeEach((to, _, next) => {
  if (to.meta.needAuth && !store.getters.isAuth) {
    next('/jobs');
  } else if (to.meta.needUnauth && store.getters.isAuth) {
    next('/jobs');
  } else {
    next();
  }
});

export default router;
