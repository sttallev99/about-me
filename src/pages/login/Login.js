import { useContext, useRef } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import './login.css';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext'

const Login = () => {
  const {user, isFetching, error, dispatch} = useContext(AuthContext);
  const email = useRef();
  const password = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    loginCall({email: email.current.value, password: password.current.value}, dispatch);
  }

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
            <h3 className='loginLogo'>About You</h3>
            <span className='loginDesc'>
                Connect with friends and the world around you on About You.
            </span>
        </div>
        <div className='loginRight' onSubmit={handleClick}>
            <form className='loginBox'>
                <input placeholder='Email' type='email' className='loginInput' ref={email} required/>
                <input 
                  placeholder='Password' 
                  type='password' 
                  className='loginInput' 
                  ref={password}
                  minLength='6'
                  required
                />
                <button className='loginButton' disabled={isFetching}>
                  {isFetching ? <CircularProgress sx={{ color: 'white'}}/> : 'Log In'}
                </button>
                <span className='loginForgot'>Forgot Password?</span>
                <button className='loginRegisterButton'>Create a New Account</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
