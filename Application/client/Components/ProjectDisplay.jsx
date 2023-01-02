import React from 'react';
import { useState, useRef } from 'react';


const ProjectDisplay = props => {
  const handleSubmit = e => {
    e.preventDefault();

    const taskInfo = {
      project: '63b0c014072cf2ff4951654d',
      description: e.target.description.value,
      responsibleBy: e.target.responsible.value,
      startDate: e.target.dateStarted.value,
      deadline: e.target.deadline.value,
      stage: 'toDo',
    }
    console.log(taskInfo);
    
    const url = 'http://localhost:3000/create/task';
    const requestOption = {
      method: 'POST',
      header: {'Content-Type': 'application/json'},
      body: JSON.stringify(taskInfo),
    }
    // fetch(url, requestOption)
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err))
  } 

  return (
    <>
    <div className='form-container'>Create Task Form
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor='members' id='members' name='members'>Members: </label>
        <input type='text' id='members' name='members' placeholder='members'></input><br />
        <label htmlFor='description' id='description' name='description'>Task Description: </label>
        <input type='text' id='description' name='description' placeholder='description'></input><br />
        <label htmlFor='dateStarted' id='dateStarted' name='dateStarted'>Date Started: </label>
        <input type='text' id='dateStarted' name='dateStarted' placeholder='date'></input><br />
        <label htmlFor='deadline' id='deadline' name='deadline'>Deadline: </label>
        <input type='text' id='deadline' name='deadline' placeholder='deadline'></input><br />
        <label htmlFor='Responsible' id='responsible' name='responsible'>Responsible By: </label>
        <input type='text' id='responsible' name='responsible' placeholder='responsible'></input><br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>

    <div className='column-container'>
      <div className='column1'>Column1: To Do</div>
      <div className='column2'>Column2: In Progress</div>
      <div className='column3'>Column3: To Verify</div>
      <div className='column4'>Column4: Completed</div>
    </div>
    </>
  )
}

export default ProjectDisplay;