import analyticsService from '@src/base/services/analytics/analytics';
import app from './app';

describe('App', () => {
  const APP_CONTAINER_SELECTOR = 'data-app-container';

  function createAppRootElement(){
    const element = document.createElement('div');
    element.setAttribute(APP_CONTAINER_SELECTOR, '');
    return element;
  }

  beforeEach(() => {
    analyticsService.init = jest.fn();
    document.body.appendChild(createAppRootElement());
  })

  afterEach(() => {
    document.querySelector(`[${APP_CONTAINER_SELECTOR}]`).remove();
  });

  it('should render homepage on initialize', done => {
    app.init();
    setTimeout(() => {
      expect(document.querySelector('h1').textContent).toEqual('The simplest todo list ever made');
      done();
    });
  });

  it('should initialize analytics on initialize', () => {
    app.init();
    expect(analyticsService.init).toHaveBeenCalled();
  });
});
