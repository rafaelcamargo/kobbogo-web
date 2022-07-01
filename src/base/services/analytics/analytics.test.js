import ENV from '@environment';
import GAnalytics from '@glorious/analytics';
import { GAnalyticsMock, ganalyticsInstanceMock } from '@src/base/mocks/glorious-analytics';
import googleAnalyticsAdapter from '@glorious/analytics/dist/adapters/google-analytics';
import analyticsService from './analytics';

jest.mock('@glorious/analytics');
GAnalytics.mockImplementation(GAnalyticsMock);

describe('Analytics Service', () => {
  beforeEach(() => {
    ganalyticsInstanceMock.init = jest.fn();
    ganalyticsInstanceMock.trackPageview = jest.fn();
  });

  it('should initialize glorious analytics passing Google Analytics as adapter', () => {
    analyticsService.init();
    expect(ganalyticsInstanceMock.init).toHaveBeenCalledWith(
      ENV.ANALYTICS.GOOGLE.ID, {
        adapter: googleAnalyticsAdapter
      }
    );
  });

  it('should track page view on initialize', () => {
    analyticsService.init();
    expect(ganalyticsInstanceMock.trackPageview).toHaveBeenCalledTimes(1);
  });

  it('should track page view', () => {
    analyticsService.init();
    analyticsService.trackPageView()
    expect(ganalyticsInstanceMock.trackPageview).toHaveBeenCalledTimes(2);
  });
});
