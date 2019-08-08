import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const projectDetails = props => {
  const { projects } = props;
  if (projects) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{projects.title}</span>
            <p>{projects.content}</p>
          </div>
          <div className="card-action grey lighten-1 grey-text">
            <div>
              Posted by {projects.authorFirstName} {projects.authorLastName}
            </div>
            <div>2nd September, 2019</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loadinvg project...</p>
      </div>
    );
  }
};
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(projectDetails);
