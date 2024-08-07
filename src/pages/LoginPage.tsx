import React from 'react'
// import HomePage from './HomePage'
import signUpImg from '../assets/SignupAndLogin.webp'
import { auth } from '../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import SubFooter from '../components/SubFooter';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Log in successfully!');
      setEmail('')
      setPassword('')
      navigate('/home')
    } catch (error) {
      alert(error.massage);
    }
  }

  return (
    <>
      <div className='register-page'>
        <Helmet>
          <title>Log in and start learning | Udemy</title>
        </Helmet>
        <img src={signUpImg} alt="signUpImg" />
        <h1>Log in to your Udemy account</h1>
        <form onSubmit={handleLogin}>
          <input name='user-email' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input name='user-password' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button id='signup-btn'>Log in</button>
        </form>
      </div>
      <SubFooter />
    </>

  )
}

export default LoginPage
