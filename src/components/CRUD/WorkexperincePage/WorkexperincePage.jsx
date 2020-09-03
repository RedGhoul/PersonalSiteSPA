import React, { Component } from "react";
import WorkexperinceCards from "./WorkexperinceCards";

export class WorkexperincePage extends Component {
  render() {
    return (
      <div className="container">
        <h1>Work Experince</h1>
        <button type="button" className="btn btn-primary">
          Create New WorkExperince
        </button>
        <WorkexperinceCards token={this.props.token}></WorkexperinceCards>
      </div>
    );
  }
}

export default WorkexperincePage;
