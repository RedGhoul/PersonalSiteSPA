import React, { Component } from "react";
import TextInputGroup from "../../Layout/TextInputGroup";
import { Link } from "react-router-dom";
import Project from '../../../api/Project';
class ProjectCardUpdateForm extends Component {
  state = {
    name: "",
    date: "",
    tag_line: "",
    id: "",
    url_github: "",
    url_live: "",
    can_show: "",
  };

  componentDidMount() {
    const { proj } = this.props.location.state;
    if (proj) {
      const { _id, name, tag_line, url_github, url_live, can_show } = proj;
      this.setState({
        id: _id,
        name: name,
        tag_line: tag_line,
        url_github: url_github,
        url_live: url_live,
        can_show: can_show,
      });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { token } = this.props.location.state;
    Project.Update({
      name: this.state.name,
      date: this.state.date,
      tag_line: this.state.tag_line,
      url_github: this.state.url_github,
      url_live: this.state.url_live,
    }, this.state.id, {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    })
      .then((res) => {
        this.props.history.push("/CRUD/");
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  }


  render() {
    let button = "Update Current Project";
    const { proj } = this.props.location.state;
    if (!proj) {
      button = "Create New Project";
    }
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
                <button
                  className="btn btn-primary btn-update btn-add-card"
                  type="submit"
                >
                  {button}
                </button>
              </form>
              <div style={{ marginTop: "20px" }}>
                <Link
                  to="/CRUD/"
                  className="btn btn-primary btn-update btn-add-card"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  }
}

export default ProjectCardUpdateForm;
