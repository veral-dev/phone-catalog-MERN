import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { AlertContext } from '../context/Alert.context';
import AppRouter from '../routes/AppRoutes';
import PhoneProvider, { PhoneContext } from '../context/Phone.context';

const renderWithProvider = (ui) =>
  render(
    <PhoneContext.Provider
      value={{
        phoneData: [{}],
        loading: false,
        getPhone: jest.fn()
      }}
    >
      <AlertContext.Provider value={{ setToastMsg: jest.fn(), setErrorMsg: jest.fn(), errorMsg: 'Error text', toastMsg: 'Toast text' }}>
        <PhoneProvider>{ui}</PhoneProvider>
      </AlertContext.Provider>
    </PhoneContext.Provider>,
    {
      wrapper: Router
    }
  );

const goTo = (route) => window.history.pushState({}, 'Test page', route);

describe('Router', () => {
  test('route to home page', async () => {
    goTo('/');
    renderWithProvider(<AppRouter />);

    expect(await screen.findByText(/discover the best phones here/i)).toBeInTheDocument();
    expect(await screen.findByText(/error text/i)).toBeInTheDocument();
    expect(await screen.findByText(/toast text/i)).toBeInTheDocument();
  });

  test('route to create new phone page', async () => {
    goTo('/form');
    renderWithProvider(<AppRouter />);

    expect(screen.getByText(/create a new phone/i)).toBeInTheDocument();
  });
});
