import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ViTextInput from '../../components/ViTextInput';
import ViPasswordInput from '../../components/ViPasswordInput';




const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (event) => {
    if(event.target.name === 'email') {
      setEmail(event.target.value);
    }
    if(event.target.name === 'password') {
      setPassword(event.target.value);
    }
  }
  const doLogin = (e) => {
    let isLogin = false;
    if(email === "admin@gmail.com" && password === "admin") {
      isLogin = true;
    }

    if(isLogin) {
      navigate('/user-management');
    } else {
      alert('Login failed');
    }
  }
  return (
    <div className="login-form">
      <h1>User Login</h1>
      <br />
      <ViTextInput 
        title="Email" 
        name="email" 
        handleInputChange={handleInputChange}
         />
      <ViPasswordInput 
        title="Password" 
        name="password" 
        handleInputChange={handleInputChange}
        />
    
      <div className="form-group">
        <button onClick={doLogin} className="btn">Login</button>
      </div>
    </div>
  );
}

export default Login;
