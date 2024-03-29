import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import ViTextInput from '../../components/ViTextInput';
import ViPasswordInput from '../../components/ViPasswordInput';

const Login = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState({email: '', password: ''});

  const handleChange = (event) => {
    setUsers({...users, [event.target.name]: event.target.value})
  }



const doLogin = () => {


     const trimmedEmail = users.email.trim();
     const trimmedPassword = users.password.trim();
  
  
    console.log('Email:', trimmedEmail);
    console.log('Password:', trimmedPassword);
  
    let isLogin = false;
    if (trimmedEmail === 'admin@gmail.com' && trimmedPassword === 'admin') {
      isLogin = true;
    }
  
    if (isLogin) {
      console.log('Login successful');
      navigate('/user-management');
    } else {
      console.log('Login failed');
      alert('Login failed');
    }
  };
  

  return (
 
    <div className="login-form">
     <form >
      <h1 className='add-user'>User Login</h1>
      <br />
      <ViTextInput title="Enter Your Email Id" name="email" handleChange={handleChange} value={users.email} />
      <br />
      <ViPasswordInput title="Enter Your Password" name="password" handleChange={handleChange} value={users.password} />

      <div className="form-group">
        <button onClick={doLogin} className="btn">
          Login
        </button>
      </div>
      </form>
     
    </div>
  );
};

export default Login;

