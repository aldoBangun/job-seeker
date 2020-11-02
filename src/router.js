import { createRouter, createWebHistory } from 'vue-router';

import JobsList from './views/jobs/JobsList.vue';
import NotFound from './views/NotFound.vue';
import UserAuth from './views/auth/UserAuth.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/jobs' },
    { path: '/jobs', component: JobsList },
    { path: '/auth', component: UserAuth },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active'
});

export default router;
