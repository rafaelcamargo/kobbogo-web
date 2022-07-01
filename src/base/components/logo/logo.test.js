import { render } from '@testing-library/vue';
import { logo } from './logo';

describe('Logo', () => {
  it('should render Kobbogo logotype', () => {
    const { getByAltText } = render(logo);
    expect(getByAltText('Kobbogo Logotype')).toBeInTheDocument();
  });
});
