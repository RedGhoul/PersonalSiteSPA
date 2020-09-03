import React, { Component } from "react";
import { Link } from "react-router-dom";
import Project from '../../../api/Project';
class ProjectCardRow extends Component {
  constructor(props) {
    super(props);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onToggleShowClick = this.onToggleShowClick.bind(this);
  }

  onToggleShowClick(id) {
    //const token = this.props.token;
  }

  onDeleteClick(id) {
    Project.Delete({}, id, {
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.props.token,
    }).then((res) => {
      this.props.refresh();
    })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  }

  render() {
    let content = [];
    for (let index = 0; index < this.props.proj.length; index++) {
      const element = this.props.proj[index];
      const { _id, can_show, name, tag_line } = element;
      let showglyph = "";
      if (can_show) {
        showglyph = "glyphicon glyphicon-eye-open";
      } else {
        showglyph = "glyphicon glyphicon-eye-close";
      }
      content.push(
        <div key={_id} className="col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
            <div className="caption">
              <div className="col-lg-12">
                <h4>
                  <strong>{name}</strong>
                </h4>
              </div>
              {/* <button
                className="pull-right text-primary"
                onClick={() => this.onToggleShowClick(_id)}
              >
                <span className={showglyph}></span>
              </button> */}

              <div className="col-lg-12">
                <p className="text-muted">{tag_line}</p>
              </div>
              <Link
                to={{
                  pathname: "/CRUD/ProjectUpdate/",
                  state: {
                    proj: element,
                    token: this.props.token,
                  },
                }}
                className="btn btn-danger btn-xs btn-update btn-add-card"
              >
                <i></i>View in Full
              </Link>
              <button
                className="pull-right text-primary"
                onClick={() => this.onDeleteClick(_id)}
              >
                <span className="glyphicon glyphicon-trash"></span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return <div className="row">{content}</div>;
  }
}

export default ProjectCardRow;
