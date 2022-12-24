import React from 'react';


const projectCard = ({
  info, openModal
}) => {
  const {
    //unsure if we have stories,toDos, etc on the card or we only want this and maybe like a overview or info?
    name, startDate, endDate, projectMembers, stories, toDos, inProgress, toVerify, finished
  } = info;

  return (
    <article className="projectCard">
      <div className="prokectHeadContainer">
        <h3 className="projectName">{name}</h3>
      </div>
      <ul className="projectDetailsList">
        <li className="projDetail">startDate: {startDate}</li>
        <li className="projDetail">endDate: {endDate}</li>
        <li className="projDetail">projectMembers: {projectMembers}</li>
      </ul>
    </article>
  );
};

export default projectCard;
