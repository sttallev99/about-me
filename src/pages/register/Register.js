import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './register.css';
import axios from 'axios';

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const rePassword = useRef();
  const navigate = useNavigate();

  const onClick = async (e) => {
    e.preventDefault();
    if(password.current.value !== rePassword.current.value) {
      password.current.setCustomValidity('Паролите не съвпадат')
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      
      try{
        await axios.post('/auth/register', user);
        navigate('/login')
      }catch(err) {
        console.log(err);
      }
    }
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
          <div className='loginRight'>
            <form onSubmit={onClick}>
              <div className='loginBox'>
                  <input placeholder='Username' className='loginInput' ref={username} required/>
                  <input placeholder='Email' type='email' className='loginInput' ref={email} required/>
                  <input placeholder='Password' minLength={6} className='loginInput' ref={password} required/>
                  <input placeholder='Password Again' className='loginInput' ref={rePassword} required/>
                  <button className='loginButton' type='submit'>Sign Up</button>
                  <button className='loginRegisterButton'>Log into account</button>
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Register
