import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Button from '../../components/ui/Button';

describe('Button', () => {
  const onClick = jest.fn();
  test('renders correctly', async () => {
    expect(render(<Button onClick={onClick}>Button text</Button>)).toMatchSnapshot();
  });

  test('onClick should be called', () => {
    render(<Button onClick={onClick}>Button text</Button>);
    const button = screen.getByRole('button', { name: /button text/i });

    fireEvent.click(button);
    expect(onClick).toBeCalled();
  });
  test('button receive backgroun color from props', () => {
    render(
      <Button onClick={onClick} bgColor="red">
        Button text
      </Button>
    );
    const button = screen.getByRole('button', { name: /button text/i });
    expect(button).toHaveStyle(`background-color: red;`);
  });
});
