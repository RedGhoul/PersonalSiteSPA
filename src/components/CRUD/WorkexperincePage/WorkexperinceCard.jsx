import React, { Component } from "react";
import { Link } from "react-router-dom";
import WorkExperience from '../../../api/WorkExperince';
class WorkExperinceCard extends Component {

  onDeleteClick = (id) => {
    WorkExperience.Delete({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.props.token
    }, id).then(res => {
      this.props.refresh();
    })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  render() {
    let content = [];
    for (let index = 0; index < this.props.work.length; index++) {
      const element = this.props.work[index];
      const {
        _id,
        company_name,
        postion_name,
        orderNumber
      } = element;
      content.push(
        <div key={_id} className="col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
            <div className="caption">
              <div className="col-lg-12">
                <h4>
                  <strong>{company_name}</strong>
                </h4>
              </div>
              <div className="col-lg-12">
                <p className="text-muted">
                  <strong>Postion: </strong>
                  {postion_name}
                </p>
              </div>
              <div className="col-lg-12">
                <p className="text-muted">
                  <strong>Order: </strong>
                  {orderNumber}
                </p>
              </div>

              <Link
                to={{
                  pathname: "/CRUD/WorkexperinceUpdate/",
                  state: {
                    ex: element,
                    token: this.props.token
                  }
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

export default WorkExperinceCard;
