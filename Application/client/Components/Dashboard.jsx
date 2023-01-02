import React, { useState } from 'react';

const Dashboard = () => {
  const url = 'http://localhost:3000/userinfo';
  const requestOption = {
    method: 'GET',
    credentials: 'include',
  }
  const [username, setUsername] = useState(null);
  fetch(url, requestOption)
    .then((res) => res.json())
    .then((data) => {
      setUsername(data);
    });
  return (<>
    username: {username}<br/>
    my projects:
  </>);
}

export default Dashboard;