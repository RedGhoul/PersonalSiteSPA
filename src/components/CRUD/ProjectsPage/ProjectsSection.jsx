import React, { Component } from "react";
import ProjectCardRow from "./ProjectCardRow";
import { Link } from "react-router-dom";
import Project from '../../../api/Project';
class ProjectsSection extends Component {
  state = {
    token: this.props.token,
    projects: [],
  };

  componentDidMount() {
    this.getProjects();
  }

  getProjects = () => {
    Project.Get().then((res) => {
      this.setState({
        projects: res.data.list_projects,
      });
    })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  }

  createCardRows() {
    let cardRows = [];
    const { projects, token } = this.state;
    if (projects) {
      let cardRow = [];
      for (let index = 0; index < projects.length; index++) {
        const element = projects[index];
        if (index % 3 !== 0 || index === 0) {
          cardRow.push(element);
        } else {
          cardRows.push(
            <ProjectCardRow
              key={(cardRows.length + 1).toString()}
              proj={cardRow}
              token={token}
              refresh={this.getProjects}
            ></ProjectCardRow>
          );
          cardRow = [];
          cardRow.push(element);
        }
      }
      if (cardRow.length !== 0) {
        cardRows.push(
          <ProjectCardRow
            key={(cardRows.length + 1).toString()}
            proj={cardRow}
            token={token}
            refresh={this.getProjects}
          ></ProjectCardRow>
        );
      }
    }
    return cardRows;
  }

  render() {
    return (
      <div className="container">
        <h1>Projects</h1>
        <Link
          to={{
            pathname: "/CRUD/NewProject/",
            state: {
              proj: null,
              token: this.props.token,
            },
          }}
          className="btn btn-primary"
        >
          <i></i>Create New Project
        </Link>
        <div style={{ marginTop: "20px" }}>
          <div className="container">{this.createCardRows()}</div>
        </div>
      </div>
    );
  }
}

export default ProjectsSection;
