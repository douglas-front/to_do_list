import { useState } from 'react';
import './login.scss';

const Login = () => {
  const [name, setName] = useState<string>('');
  const [exist, setExist] = useState<string>('');

  const setNameOnStorage = () => {
    const storedName = localStorage.getItem('name');

    if (storedName) {
      setExist('Você já fez login');
      window.open("http://localhost:5173/", "_self");
    } else {
      localStorage.setItem('name', `${name}`);
      setExist('');
      window.open("http://localhost:5173/", "_self");
    }
  };

  return (
    <section className='login'>
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
          />
        </form>
        <button onClick={setNameOnStorage}>Submit</button>
      </div>
    </section>
  );
};

export default Login;
