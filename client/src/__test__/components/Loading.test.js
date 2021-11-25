import React from 'react';
import { render } from '@testing-library/react';

import Loading from '../../components/ui/Loading';
describe('Loading', () => {
  test('renders correctly', async () => {
    expect(render(<Loading />));
  });
});
