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
  const handleLogin = async () => {
    //userName and password are what the user put in the form
    console.log(username, password);

    // Store username and password in a userInfo object
    const userInfo = {
      username: username,
      password: password,
    }

    if (username === '' || password === '') {
      setMessage('Username or password missing');
      return;
    } else {
      const url = 'http://localhost:3000/user/login';
      const requestOption = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userInfo)
      }
      const response = fetch('url', requestOption);
    }

    // send userName and password to backend route

  }

  //handleSignup => should create new user information in database
  const handleSignup = () => {
    // console.log(username, password);
    // Store username and password in a userInfo object
    const userInfo = {
      username: username,
      password: password,
    }

    //username and password are both required information
    if (username === '' || password === '') {
      setMessage('Username or password missing');
      return;
    } else {
      // send userName and password to backend route
      const url = 'http://localhost:3000/user/signup';
      const requestOption = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userInfo)
      }
      const response = fetch(url, requestOption);
    }
  }

  //handleGoogle send request to backend for google Oauth
  const handleGoogle = () => {
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
      <p><button onClick={handleGoogle}>Login with Google</button></p>
      
    </div>
  )
}


export default Login;