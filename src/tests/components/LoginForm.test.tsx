import React from 'react';
import {
  render, fireEvent, screen, waitFor,
} from '@testing-library/react';
import LoginForm from 'components/LoginForm';
import IAMAPI from 'api/IAMAPI';

jest.mock('../../api/IAMAPI');

describe('LoginForm', () => {
  test('Renders', () => {
    const Form = render(<LoginForm setToken={(token: string) => { console.log(token); }} />);
    expect(Form).toBeTruthy();
  });

  test('Shows prompts for blank required fields when submitting', async () => {
    render(<LoginForm setToken={(token: string) => { console.log(token); }} />);
    fireEvent.click(await screen.findByRole('button'));

    await waitFor(() => {
      expect(screen.getByText('name is required')).toBeTruthy();
      expect(screen.getByText('password is required')).toBeTruthy();
    });
  });

  test('Shows prompts for required fields when focusing and unfocusing', async () => {
    render(<LoginForm setToken={(token: string) => { console.log(token); }} />);
    screen.getByTestId('LoginForm-name-input').focus();
    screen.getByTestId('LoginForm-password-input').focus();
    (await screen.findByRole('button')).focus();

    await waitFor(() => {
      expect(screen.getByText('name is required')).toBeTruthy();
      expect(screen.getByText('password is required')).toBeTruthy();
    });
  });

  test('Shows api error when submitting an empty form', async () => {
    render(<LoginForm setToken={(token: string) => { console.log(token); }} />);
    const button = await screen.findByRole('button');
    button.click();

    expect(IAMAPI.login).toHaveBeenCalledWith({ name: '', password: '' });
    expect(IAMAPI.login).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(screen.getByText('username and password are required'));
    });
  });
});
