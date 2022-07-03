import { render as testingLibraryRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
export { screen } from '@testing-library/react';

export const render = component => {
  return {
    user: userEvent.setup(),
    ...testingLibraryRender(component)
  };
}
