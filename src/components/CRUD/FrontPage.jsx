import React, { Component } from "react";
import ProjectsSection from "./ProjectsPage/ProjectsSection";
import WorkExperinceSection from "./WorkexperincePage/WorkExperinceSection";
class FrontPage extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <ProjectsSection token={this.props.token}></ProjectsSection>
          </div>
          <div className="col-md-12">
            <WorkExperinceSection token={this.props.token}></WorkExperinceSection>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
