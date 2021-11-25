import React from 'react';
import { render } from '@testing-library/react';

import Spinner from '../../components/ui/Spinner';
describe('Spinner', () => {
  test('renders correctly', async () => {
    expect(render(<Spinner />));
  });
});
