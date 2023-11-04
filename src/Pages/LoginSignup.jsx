import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='LoginSignup'>
      <div className="LoginSignup_container">
        <h1>SIGN UP</h1>
        <div className="LoginSignup_fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='LoginSignup_login'>Already have an account? <span>Login here</span></p>
        <div className="LoginSignup_agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup