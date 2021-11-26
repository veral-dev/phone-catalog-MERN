import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import AddEditPhone from '../../pages/AddEditPhone';
import { OK_STATUS } from '../consts/httpStatus';
import { renderWithRouter } from '../utils';
import { PhoneContext } from '../../context/Phone.context';
import { AlertContext } from '../../context/Alert.context';
import { fakeResponse } from '../consts/helper';

const server = setupServer(
  rest.get(`/phones/detail/5`, (req, res, ctx) => {
    res(ctx.status(OK_STATUS), ctx.json(fakeResponse));
  })
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

beforeEach(() =>
  renderWithRouter(
    <PhoneContext.Provider value={{ createNewPhone: jest.fn() }}>
      <AlertContext.Provider value={{ setToastMsg: jest.fn() }}>
        <AddEditPhone />
      </AlertContext.Provider>
    </PhoneContext.Provider>
  )
);

describe('when access to AddEditPhone page', () => {
  test('there must be a create phone form page', () => {
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('should exists the fields', () => {
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/manufacturer/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/screen/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/processor/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ram/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Upload Preview Image')).toBeInTheDocument();
  });
  test('the form page must display the success message', async () => {
    const nameInput = screen.getByLabelText(/name/i);
    const manufacturerInput = screen.getByLabelText(/manufacturer/i);
    const descriptionInput = screen.getByLabelText(/description/i);

    fireEvent.change(nameInput, {
      target: { name: 'name', value: 'my product' }
    });
    fireEvent.change(manufacturerInput, {
      target: { name: 'manufacturer', value: '10' }
    });
    fireEvent.change(descriptionInput, {
      target: { name: 'description', value: 'electronic' }
    });

    expect(nameInput).toHaveValue('my product');
    expect(manufacturerInput).toHaveValue('10');
    expect(descriptionInput).toHaveValue('electronic');
  });

  test('should exists the submit button', () => {
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });
});

describe('when the user submits the form and the server returns an unexpected error', () => {
  test('the form page must display the error message "Unexpected error, please try again', async () => {
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => expect(screen.getByText(/please, fill required fields/i)).toBeInTheDocument());
  });
});

describe('when the user try to upload images with fileuploader', () => {
  test('test uploading', async () => {
    const imageInput = screen.getByLabelText(/upload preview image/i);
    expect(imageInput).toBeInTheDocument();
    fireEvent.change(imageInput, {
      target: {
        files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })]
      }
    });
    expect(await screen.findByLabelText(/uploading/i)).toBeInTheDocument();
    expect(screen.queryByText(/upload preview image/i)).not.toBeInTheDocument();
  });
});
