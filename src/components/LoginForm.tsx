/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import IAMAPI from 'api/IAMAPI';
import Button from 'components/Button';

interface LoginFormProps{
    setToken(token: string): void
}

const LoginForm: React.FC<LoginFormProps> = ({ setToken }) => {
  const [name, setName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = () => {
    setSubmitted(true);
    setError('');
    IAMAPI.login({ name, password })
      .then((res: {data: string}) => {
        setToken(res.data);
      })
      .catch((err: Error) => {
        setError(err.message);
      });
  };

  return (
    <form className="bg-gray-100 m-auto px-4 py-8 w-1/6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-500">
          Name
        </label>
        <input
          className="block border-gray-800 focus:border-indigo-500 focus:ring-indigo-500 my-2 p-1 rounded-md shadow-sm sm:text-sm w-full"
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => { setNameTouched(true); }}
          data-testid="LoginForm-name-input"
        />
        {(submitted || nameTouched) && name.length === 0 && <p>name is required</p>}
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-500">
          password
        </label>
        <input
          className="block border-gray-800 focus:border-indigo-500 focus:ring-indigo-500 my-2 p-1 rounded-md shadow-sm sm:text-sm w-full"
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => { setPasswordTouched(true); }}
          data-testid="LoginForm-password-input"
        />
      </div>
      {(submitted || passwordTouched) && password.length === 0 && <p>password is required</p>}
      <Button className="mt-2" type="button" onClick={onSubmit}>Submit</Button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginForm;
