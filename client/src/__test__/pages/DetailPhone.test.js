import React from 'react';
import { screen, waitFor, render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';

import DetailPhone from '../../pages/DetailPhone';
import { PhoneContext } from '../../context/Phone.context';

const renderComponent = ({ id }) =>
  render(
    <PhoneContext.Provider value={{ getPhone: jest.fn(), deletePhone: jest.fn() }}>
      <MemoryRouter initialEntries={[`/phone/${id}`]}>
        <Route path="/phone/:id">
          <DetailPhone />
        </Route>
      </MemoryRouter>
    </PhoneContext.Provider>
  );

describe('DetailPhone', () => {
  test('renders initial with wrong params id', async () => {
    renderComponent({ id: 5 });
    await waitFor(() => expect(screen.getByText(/error/i)));
  });
});
