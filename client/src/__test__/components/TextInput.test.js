import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import TextInput from '../../components/ui/TextInput';

describe('TextInput', () => {
  const handleChange = jest.fn();
  test('renders correctly', async () => {
    expect(
      render(<TextInput name="test-textinput" label="Test-textinput" type="text" value={'testinput'} onChange={handleChange} />)
    ).toMatchSnapshot();
  });

  test('handleChange should be called', () => {
    render(<TextInput name="test-textinput" label="Test-textinput" type="text" value={'testinput'} onChange={handleChange} />);
    const nameInput = screen.getByLabelText(/test-textinput/i);

    fireEvent.change(nameInput, {
      target: { name: 'test-textinput', value: 'my product' }
    });
    expect(handleChange).toBeCalled();
  });
});
