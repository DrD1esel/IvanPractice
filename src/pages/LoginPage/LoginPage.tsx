import React, { useState } from "react";
import "./LoginPage.css";

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const emailOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
  };

  const passwordOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
  };

  const Login = (e: React.FormEvent<HTMLFormElement>): void => {

  }

  return (
    <div className='formContainer'>
      <form onSubmit={Login}>
        <label>Email:</label><br/>
        <input type="email" name="email" value={email} onChange={emailOnChange} /><br/>
        <label>Password:</label><br/>
        <input type="password" name="password" value={password} onChange={passwordOnChange} /><br/>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default LoginPage;