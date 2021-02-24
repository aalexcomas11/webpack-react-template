import React, { useState } from 'react';
import LoginForm from 'components/LoginForm';
import Button from 'components/Button';

import 'tailwindcss/tailwind.css';
import './styles.css';

const App = () => {
  const [token, setToken] = useState('');

  return (
    <div>
      <p>hello im a cat!</p>
      <Button onClick={() => { alert('You will not perish'); }}>
        Click me or perish!
      </Button>
      <div className="background-class" />
      {!token && (
      <LoginForm setToken={setToken} />
      )}
    </div>
  );
};

export default App;
