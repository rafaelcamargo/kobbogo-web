import ENV from '@environment';
import GAnalytics from '@glorious/analytics';
import googleAnalyticsAdapter from '@glorious/analytics/dist/adapters/google-analytics';

let analytics;

const _public = {};

_public.init = () => {
  const { ID } = ENV.ANALYTICS.GOOGLE;
  analytics = new GAnalytics();
  analytics.init(ID, { adapter: googleAnalyticsAdapter });
  _public.trackPageView();
};

_public.trackPageView = () => {
  analytics.trackPageview();
};

export default _public;
