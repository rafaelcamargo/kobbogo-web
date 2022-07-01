import { createRouter, createWebHistory } from 'vue-router';
import routes from '@src/routes';
import { home } from '@src/home/home';

export const router = createRouter({
  history: createWebHistory(),
  routes: routes.map(route => ({
    ...route,
    component: getViewComponentByViewName(route.name)
  }))
});

function getViewComponentByViewName(name){
  return {
    home
  }[name];
}
