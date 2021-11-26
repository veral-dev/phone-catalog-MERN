import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Card from '../../components/ui/Card';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { fakeResponse } from '../consts/helper';

beforeEach(() => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Card phone={fakeResponse}>Card text</Card>
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
