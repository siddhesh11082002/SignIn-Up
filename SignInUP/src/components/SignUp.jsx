import React from 'react'
import './SignUp.css'

const SignUP = () => {
  return (
    <div className='container'>
        <div className='heading'>
            <h2>Welcome Back</h2>
        </div>

        <div>
          <label htmlFor="name">Full Name:</label>
          <div>
            <img src="" alt="logo" />
            <input type="text" id='name' />
          </div>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <div>
            <img src="" alt="logo" />
            <input type="email" id='email' />
          </div>
        </div>

        <div>
          <label htmlFor="uname">User Name:</label>
          <div>
            <img src="" alt="logo" />
            <input type="text" id='uname' />
          </div>
        </div>

        <div>
          <label htmlFor="pass">Password:</label>
          <div>
            <img src="" alt="logo" />
            <input type="password" id='pass' />
          </div>
        </div>

        <div>
          <a href="#">I agree to all Term, Privacy Policy and Fees</a>
          <button>Sign Up</button>
          <p>or</p>
          <div className='googleContainer'>
            <img src="" alt="google logo" />
            <a href="#">Sign In with Google</a>
          </div>
          <div className='fbContainer'>
            <img src="" alt="fb logo" />
            <a href="#">Sign In with Facebook</a>
          </div>
        </div> 

        
    </div>
  )
}

export default SignUP

