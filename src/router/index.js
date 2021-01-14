import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/pomodoro',
      name: 'Pomodoro',
      components: {
        header: () => import('@/components/header.vue'),
        default: () => import('@/views/pomo.vue')
      }
    },
  ],
});
