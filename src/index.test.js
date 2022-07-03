import { screen } from '@src/base/services/testing/testing';
import analyticsService from '@src/base/services/analytics/analytics';

describe('Index', () => {
  beforeAll(() => {
    analyticsService.init = jest.fn();
    document.body.innerHTML = '<div data-app-container></div>';
    require('@src/index.js');
  });

  it('should initialize app', () => {
    expect(screen.getByText('The simplest todo list ever made')).toBeInTheDocument();
    expect(analyticsService.init).toHaveBeenCalled();
  });
});
