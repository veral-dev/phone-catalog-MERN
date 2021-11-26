import React from 'react';
import { screen } from '@testing-library/react';
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

describe('Home page', () => {
  test('should rendering home page', () => {
    expect(screen.getByText(/discover the best phones here/i)).toBeInTheDocument();
  });
  test('there must be a phone card if the list have information', () => {
    expect(screen.getByText('iPhone 7')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    // Price should have currency after price
    expect(screen.getByText('769 €')).toBeInTheDocument();
  });
});
