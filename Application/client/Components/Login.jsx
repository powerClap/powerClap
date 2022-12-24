import React from 'react';


const Login = props => {
  return (
    <div>
      <p><label htmlFor='username'>Username: </label>
      <input name='username' placeholder='username'/></p>

      <p><label htmlFor='password'>Password: </label>
      <input name='password' placeholder='password'/></p>

      <button>Log In</button>
      <button>Sign Up</button>
    </div>
  )
}


export default Login;