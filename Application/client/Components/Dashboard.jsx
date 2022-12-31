import React from 'react';

const Dashboard = () => {
  const url = 'http://localhost:3000/userinfo';
  const requestOption = {
    method: 'GET',
    credentials: 'include',
  }
  fetch(url, requestOption)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

export default Dashboard;