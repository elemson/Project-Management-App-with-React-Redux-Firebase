import React from "react";

const projectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum doloe sit amet consectetur</p>
        </div>
        <div className="card-action grey lighten-1 grey-text">
          <div>Posted bt Elemson</div>
          <div>2nd Septeember, 2019</div>
        </div>
      </div>
    </div>
  );
};

export default projectDetails;
