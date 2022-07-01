import { createApp } from 'vue'
import { router } from '@src/router';
import analyticsService from '@src/base/services/analytics/analytics';
import template from '@src/app.html';

const _public = {};

_public.init = () => {
  const app = createApp({
    name: 'app',
    mounted: () => document.dispatchEvent(new Event('render-event')),
    template
  })
  app.use(router);
  app.mount('[data-app-container]');
  analyticsService.init();
}

export default _public;
