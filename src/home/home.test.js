import { render } from '@testing-library/vue';
import { home } from './home';

describe('Home', () => {
  it('should contain a headline', () => {
    const { getByText } = render(home);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
