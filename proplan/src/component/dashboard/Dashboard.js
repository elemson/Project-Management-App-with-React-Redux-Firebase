import React, { Component } from "react";
import Notification from "./Notfication";
import ProjectList from "../project/projectList";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { project } = this.props;
    console.log(project);
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={project} />
          </div>
          <div className="col 12 m5 offset-m1">
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    project: state.project.projects
  };
};

export default connect(mapStateToProps)(Dashboard);
