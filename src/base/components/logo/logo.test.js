import { render } from '@src/base/services/testing/testing';
import { Logo } from './logo';

describe('Logo', () => {
  it('should render Kobbogo logotype', () => {
    const { getByAltText } = render(<Logo />);
    expect(getByAltText('Kobbogo Logotype')).toBeInTheDocument();
  });
});
