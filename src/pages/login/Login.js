import { useRef } from 'react'
import './login.css'

const Login = () => {
  const email = useRef();
  const password = useRef();

  const handleClick = (e) => {
    e.preventDefault();
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
                <button className='loginButton'>Log In</button>
                <span className='loginForgot'>Forgot Password?</span>
                <button className='loginRegisterButton'>Create a New Account</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
