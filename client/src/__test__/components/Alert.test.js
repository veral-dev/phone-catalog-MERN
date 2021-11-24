import React from 'react';
import { render, screen } from '@testing-library/react';

import Alert from '../../components/ui/Alert';

describe('Alert component', () => {
  test('renders correctly', async () => {
    expect(render(<Alert message="Error message" />)).toMatchSnapshot();
  });

  test('When alert is an error', () => {
    render(<Alert message="Error message" />);
    expect(screen.getByText(/error message/i)).toBeInTheDocument();
  });
  test('When alert with prop background color', () => {
    render(<Alert message="Information message" bgColor="green" />);
    expect(screen.getByText(/information message/i)).toBeInTheDocument();
    expect(screen.getByText(/information message/i)).toHaveStyle(`background-color: green;`);
  });
});
