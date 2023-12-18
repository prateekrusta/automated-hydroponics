import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/authlogin.css';
import loginImage from '../../assets/images/login-image.jpg';
import signupImage from '../../assets/images/sign-image.jpg';
import logo from '../../assets/logos/logo.png';

import userIcon from '../../assets/logos/user.png'; // Replace with your user icon
import emailIcon from '../../assets/logos/email.png'; // Replace with your email icon
import mobileIcon from '../../assets/logos/telephone.png'; // Replace with your mobile icon
import passwordIcon from '../../assets/logos/padlock.png'; // Replace with your password icon

const AuthLogin = () => {
  const [isLogin, setIsLogin] = useState(true);

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
              <input type="text" placeholder="Name" required />
            </div>
          </>
        )}
        <div className="input-container">
          <img className="icon" src={emailIcon} alt="Email Icon" />
          <input type="email" placeholder="Email" required />
        </div>
        {!isLogin && (
          <div className="input-container">
            <img className="icon" src={mobileIcon} alt="Mobile Icon" />
            <input type="tel" placeholder="Mobile Number" pattern="[0-9]{10}" required />
          </div>
        )}
        <div className="input-container">
          <img className="icon" src={passwordIcon} alt="Password Icon" />
          <input type="password" placeholder="Password" required />
        </div>
        {isLogin ? <Link to="/home"><button onClick={isLogin? null : toggleForm} type="submit">{isLogin ? 'Login' : 'Sign Up'}</button></Link>
        : <Link><button style={{width:'100%'}} onClick={isLogin? null : toggleForm} type="submit">{isLogin ? 'Login' : 'Sign Up'}</button></Link>}
       
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
