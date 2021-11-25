import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Card from '../../components/ui/Card';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

const fakeData = {
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
};

beforeEach(() => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Card phone={fakeData}>Card text</Card>
    </Router>
  );
});

describe('Card', () => {
  test('renders correctly', async () => {
    expect(screen).toMatchSnapshot();
  });

  test('Card click should be called', async () => {
    const card = screen.getByRole('heading', { name: 'iPhone 7' });
    fireEvent.click(card);
  });
});
