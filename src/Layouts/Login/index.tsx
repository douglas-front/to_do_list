import React, { useState, useEffect } from 'react';
import './login.scss';

const LoginForm = () => {
  const [name, setName] = useState<string>('');
  const [exist, setExist] = useState<string>('');
  const [themeClass, setThemeClass] = useState<string>();
  const [login, setLogin] = useState<string>();

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      setThemeClass(theme);
    }
  }, []);

  useEffect(() => {
    const loginOn = localStorage.getItem('name');
    if (loginOn) {
      setLogin('on');
    }
  }, []);

  const setNameOnStorage = () => {
    const storedName = localStorage.getItem('name');

    if (storedName) {
      setExist('Você já fez login');
      window.open('/to_do_list', '_self');
    } else {
      localStorage.setItem('name', `${name}`);
      setExist('');
      window.open('/to_do_list', '_self');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setNameOnStorage();
    }
  };

  return (
    login !== 'on' && (
      <section className={`login ${themeClass}`}>
        <h1>Login</h1>
        <div className="login-div">
          <form>
            <label>Write your name</label>
            <span>{name}</span>
            <span>{exist}</span>
            <input
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
              }}
              onKeyPress={handleKeyPress}
            />
          </form>
          <button onClick={setNameOnStorage}>Submit</button>
        </div>
      </section>
    )
  );
};

export default LoginForm;
