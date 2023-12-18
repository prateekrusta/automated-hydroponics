import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../assets/css/authlogin.css';
import loginImage from '../../assets/images/login-image.jpg';
import signupImage from '../../assets/images/sign-image.jpg';
import logo from '../../assets/logos/logo.png';
import Swal from 'sweetalert2';

import userIcon from '../../assets/logos/user.png'; // Replace with your user icon
import emailIcon from '../../assets/logos/email.png'; // Replace with your email icon
import mobileIcon from '../../assets/logos/telephone.png'; // Replace with your mobile icon
import passwordIcon from '../../assets/logos/padlock.png'; // Replace with your password icon

const AuthLogin = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      fullName:name,
      password:password,
      email:email,
      phoneNo:phone
    };

    console.log(data)
    const url = `http://localhost:8000/signup`;
    axios.post(url, data, config)
      .then((response) => {
        console.log('Singup Data sent successfully:', response.data);
        Swal.fire({
          icon: (response.data.error) ? 'error' : 'success',
          title: (response.data.error) ? response.data.error : response.data.message,
          showConfirmButton: false,
          timer:1500,
        }
        )
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();

    const data = {
      fullName:name,
      password:password,
      email:email,
      phoneNo:phone
    };

    console.log(data)
    const url = `http://localhost:8000/signup`;
    axios.post(url, data, config)
      .then((response) => {
        console.log('Login Data sent successfully:', response.data);
        Swal.fire({
          icon: (response.data.error) ? 'error' : 'success',
          title: (response.data.error) ? response.data.error : response.data.message,
          showConfirmButton: false,
          timer:1500,
        }
        )
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={`auth-container ${isLogin ? 'login' : 'signup'}`}>
      <div className="auth-form">
        <img className="logo" src={logo} alt="Logo" />
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        {!isLogin && (
          <>
            <div className="input-container">
              <img className="icon" src={userIcon} alt="User Icon" />
              <input type="text" placeholder="Name" value={name} required autoComplete='off' onChange={(e) => setName(e.target.value)} />
            </div>
          </>
        )}
        <div className="input-container">
          <img className="icon" src={emailIcon} alt="Email Icon" />
          <input type="email" placeholder="Email"  value={email} required autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
        </div>
        {!isLogin && (
          <div className="input-container">
            <img className="icon" src={mobileIcon} alt="Mobile Icon" />
            <input type="tel" placeholder="Mobile Number" pattern="[0-9]{10}"  value={phone} required autoComplete='off' onChange={(e) => setPhone(e.target.value)}/>
          </div>
        )}
        <div className="input-container">
          <img className="icon" src={passwordIcon} alt="Password Icon" />
          <input type="password" placeholder="Password"  value={password} required autoComplete='off' onChange={(e) => setPassword(e.target.value)}/>
        </div>
        {isLogin ? <Link to="/home"><button onClick={onSubmitLogin} type="submit">{isLogin ? 'Login' : 'Sign Up'}</button></Link>
        : <Link><button style={{width:'100%'}} onClick={onSubmit} type="submit">{isLogin ? 'Login' : 'Sign Up'}</button></Link>}
       
        <p className="toggle-form">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <span onClick={toggleForm}>{isLogin ? ' Sign Up' : ' Login'}</span>
        </p>
      </div>
      <div className={`auth-image ${isLogin ? 'login' : 'signup'}`}>
        <img src={isLogin ? loginImage : signupImage} alt="Auth Image" />
      </div>
    </div>
  );
};

export default AuthLogin;
