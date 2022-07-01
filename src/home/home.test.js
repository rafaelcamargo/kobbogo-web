import { render } from '@testing-library/vue';
import { home } from './home';

describe('Home', () => {
  it('should contain a headline', () => {
    const { getByText } = render(home);
    expect(getByText('The simplest todo list ever made')).toBeInTheDocument();
  });

  it('should contain kobbogo logotype', () => {
    const { getByAltText } = render(home);
    expect(getByAltText('Kobbogo Logotype')).toBeInTheDocument();
  });
});
