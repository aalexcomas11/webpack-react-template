import React, { useState } from 'react';

interface LoginFormProps{}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [name, setName] = useState('');
  //   const [nameTouched, setNameTouched] = useState(false);
  //   const [passwordTouched, setPasswordTouched] = useState(false);
  const [password, setPassword] = useState('');
  const [, setSubmitted] = useState(false);

  const onSubmit = () => {
    setSubmitted(true);
    // IAMAPI.login();
  };

  //   console.log(IAMAPI);

  return (
    <form>
      <div>
        <label htmlFor="name">
          Name
        </label>
        <input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} onFocus={() => { console.log('focusing'); }} />
      </div>
      <div>
        <label htmlFor="password">
          password
        </label>
        <input id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="button" onChange={onSubmit}>Submit</button>
    </form>
  );
};

export default LoginForm;
