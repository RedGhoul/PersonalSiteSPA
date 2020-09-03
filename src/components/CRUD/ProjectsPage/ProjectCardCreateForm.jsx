import React, { Component } from "react";
import TextInputGroup from "../../Layout/TextInputGroup";
import { Link } from "react-router-dom";
import Project from '../../../api/Project';
class ProjectCardCreateForm extends Component {
  state = {
    name: "",
    date: "",
    tag_line: "",
    id: "",
    url_github: "",
    url_live: "",
    can_show: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { token } = this.props.location.state;
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
    const input = {
      name: this.state.name,
      date: this.state.date,
      tag_line: this.state.tag_line,
      url_github: this.state.url_github,
      url_live: this.state.url_live,
    }
    Project.Create(input, headers)
      .then((res) => {
        this.props.history.push("/CRUD/");
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    let button = "Create New Project";
    return (
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="row">
              <form onSubmit={this.onSubmit}>
                <TextInputGroup
                  type="text"
                  label="Project Name"
                  name="name"
                  placeholder="Enter Project Name..."
                  value={this.state.name}
                  onChange={this.onChange}
                  error={{}}
                ></TextInputGroup>
                <TextInputGroup
                  type="text"
                  label="date"
                  name="date"
                  placeholder="Enter Date..."
                  value={this.state.date}
                  onChange={this.onChange}
                  error={{}}
                ></TextInputGroup>
                <TextInputGroup
                  type="text"
                  label="Tag Line"
                  name="tag_line"
                  placeholder="Enter Tag Line..."
                  value={this.state.tag_line}
                  onChange={this.onChange}
                  error={{}}
                ></TextInputGroup>
                <TextInputGroup
                  type="text"
                  label="Github Link"
                  name="url_github"
                  placeholder="Enter Github URL..."
                  value={this.state.url_github}
                  onChange={this.onChange}
                  error={{}}
                ></TextInputGroup>
                <TextInputGroup
                  type="text"
                  label="Live URL"
                  name="url_live"
                  placeholder="Enter Live URL..."
                  value={this.state.url_live}
                  onChange={this.onChange}
                  error={{}}
                ></TextInputGroup>
                <button type="submit">{button}</button>
              </form>
              <Link
                to="/CRUD/"
                className="btn btn-danger btn-update btn-add-card"
              >
                Back
              </Link>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  }
}
export default ProjectCardCreateForm;
