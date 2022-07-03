import ENV from '@environment';
import baseResourse from '@src/base/resources/base/base';
import usersResource from './users';

describe('Users Resource', () => {
  beforeEach(() => {
    baseResourse.post = jest.fn();
  });

  it('should save an user', () => {
    const data = { username: 'camargo', password: '123456' }
    usersResource.save(data);
    expect(baseResourse.post).toHaveBeenCalledWith(`${ENV.API.BASE_URL}/users`, data);
  });
});
