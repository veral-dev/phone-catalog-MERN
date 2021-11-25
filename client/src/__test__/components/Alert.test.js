import React from 'react';
import { screen, waitFor } from '@testing-library/react';

import Alert from '../../components/ui/Alert';
import { AlertContext } from '../../context/Alert.context';
import { renderWithRouter } from '../utils';

describe('Alert component', () => {
  test('renders correctly', async () => {
    expect(
      renderWithRouter(
        <AlertContext.Provider value={{ setToastMsg: jest.fn(), toastMsg: '', setErrorMsg: jest.fn(), errorMsg: null }}>
          <Alert message="Alert message" />
        </AlertContext.Provider>
      )
    ).toMatchSnapshot();
  });

  test('When alert is an error', () => {
    renderWithRouter(
      <AlertContext.Provider value={{ setErrorMsg: jest.fn(), errorMsg: '' }}>
        <Alert message="Error message" />
      </AlertContext.Provider>
    );
    expect(screen.getByText(/error message/i)).toBeInTheDocument();
    expect(screen.getByText(/error message/i)).toHaveStyle(`background-color: tomato;`);
  });
  test('When alert with prop background color', () => {
    renderWithRouter(
      <AlertContext.Provider value={{ setToastMsg: jest.fn(), toastMsg: '' }}>
        <Alert message="Information message" success />
      </AlertContext.Provider>
    );

    expect(screen.getByText(/information message/i)).toBeInTheDocument();
    expect(screen.getByText(/information message/i)).toHaveStyle(`background-color: mediumseagreen;`);
  });
});
