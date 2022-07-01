import app from '@src/app'

describe('Index', () => {
  it('should initialize app', () => {
    app.init = jest.fn();
    require('./index');
    expect(app.init).toHaveBeenCalled();
  });
});
