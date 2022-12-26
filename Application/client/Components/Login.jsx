import React from 'react';
import { useState } from 'react';

// Customized the useInput function to save user input on the login/signup page
const useInput = init => {
  const [ value, setValue ] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  };
  return [ value, onChange ];
}

const Login = props => {

  const [ username, usernameOnChange ] = useInput('');
  const [ password, passwordOnChange ] = useInput('');

  const [ message, setMessage ] = useState('');

  // handleLogin will send user input to the backend route set up for user authentication
  const handleLogin = () => {
    //userName and password are what the user put in the form
    console.log(username, password);

    if (username === '' || password === '') {
      setMessage('Username or password missing');
      return;
    }

    // send userName and password to backend route

  }

  //handleSignup
  const handleSignup = () => {
    console.log(username, password);

    //send userName and password to backend route for sign up a new user
  }

  //handleGoogle send request to backend for google Oauth
  const handleGoole = () => {
    console.log('This should send request for google Oauth');
  }


  return (
    <div>
      <p><label htmlFor='username'>Username: </label>
      <input name='username' placeholder='username' value={username} onChange={usernameOnChange} required={true}/></p>

      <p><label htmlFor='password'>Password: </label>
      <input name='password' type='password' placeholder='password' value={password} onChange={passwordOnChange} required/></p>

      <p style={{color: 'red'}}>{message}</p>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleSignup}>Sign Up</button>
      <p><button onClick={handleGoole}>Login with Google</button></p>
      
    </div>
  )
}


export default Login;