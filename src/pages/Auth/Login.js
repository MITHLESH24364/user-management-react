import React, { useEffect, useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import ViTextInput from '../../components/ViTextInput';
import ViPasswordInput from '../../components/ViPasswordInput';


const Login = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState({email: '', password: ''});
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setUsers({...users, [event.target.name]: event.target.value});
    setError('');
  };

  const doLogin = () => {
    const trimmedEmail = users.email.trim();
    const trimmedPassword = users.password.trim();

    if (trimmedEmail === 'admin@gmail.com' && trimmedPassword === 'admin') {
      localStorage.setItem('isLogin', "1");
      console.log('Login successful');
      navigate('/user-management');
    } else {
      setError('Incorrect email or password');
    }
  };
  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin === '1') {
      navigate('/user-management');
    }
  },[]);

  return (
    <div className="login-form">
      <form>
        <h1 className='add-user'>User Login</h1>
        <br />
      <div className="error-message-box">
        {error && <p className="error-message">{error}</p>}
      </div>
        <br />
        <ViTextInput title="Enter Your Email Id" name="email" handleChange={handleChange} value={users.email} />
        <br />
        <ViPasswordInput title="Enter Your Password" name="password" handleChange={handleChange} value={users.password} />
        <div className="form-group">
          <button type="button" onClick={doLogin}  className="btn">
            Login
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default Login;
