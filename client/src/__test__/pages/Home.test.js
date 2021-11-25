import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { OK_STATUS } from '../consts/httpStatus';
import { renderWithRouter } from '../utils';
import { PhoneContext } from '../../context/Phone.context';
import Home from '../../pages/Home';

const fakeData = [
  {
    id: 0,
    name: 'iPhone 7',
    manufacturer: 'Apple',
    description: 'lorem ipsum dolor sit amet consectetur.',
    color: 'black',
    price: 769,
    imageFileName: 'IPhone_7.png',
    screen: '4,7 inch IPS',
    processor: 'A10 Fusion',
    ram: 2
  }
];

beforeEach(() =>
  renderWithRouter(
    <PhoneContext.Provider value={{ phoneData: fakeData }}>
      <Home />
    </PhoneContext.Provider>
  )
);

describe('when access to Home page', () => {
  test('there must be a phone card if the list have information', () => {
    expect(screen.getByText('iPhone 7')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    // Price should have currency after price
    expect(screen.getByText('769 €')).toBeInTheDocument();
  });
});
