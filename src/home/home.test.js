import { render } from '@src/base/services/testing/testing';
import { Home } from './home';

describe('Home', () => {
  function mount(){
    return render(<Home />);
  }

  it('should contain a headline', () => {
    const { getByText } = mount();
    expect(getByText('The simplest todo list ever made')).toBeInTheDocument();
  });

  it('should contain kobbogo logotype', () => {
    const { getByAltText } = mount();
    expect(getByAltText('Kobbogo Logotype')).toBeInTheDocument();
  });
});
