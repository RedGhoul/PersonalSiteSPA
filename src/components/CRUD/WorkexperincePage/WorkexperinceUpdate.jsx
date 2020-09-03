import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextInputGroup from "../../Layout/TextInputGroup";
import WorkExperience from '../../../api/WorkExperince';
class WorkexperinceUpdate extends Component {
  state = {
    company_name: "",
    date: "",
    postion_name: "",
    id: "",
    comment1: "",
    comment2: "",
    comment3: "",
    comment4: "",
    comment5: "",
    orderNumber: 0
  };
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.orderNumber)
    const { token } = this.props.location.state;
    WorkExperience.Update({
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    }, {
      company_name: this.state.company_name,
      postion_name: this.state.postion_name,
      date: this.state.date,
      comment1: this.state.comment1,
      comment2: this.state.comment2,
      comment3: this.state.comment3,
      comment4: this.state.comment4,
      comment5: this.state.comment5,
      orderNumber: this.state.orderNumber
    }, this.state.id)
      .then(res => {
        this.props.history.push("/CRUD/");
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }

  componentDidMount() {
    const { ex } = this.props.location.state;
    const { _id, company_name, comment, date, postion_name, orderNumber } = ex;
    this.setState({
      company_name: company_name,
      postion_name: postion_name,
      date: date,
      comment1: comment[0],
      comment2: comment[1],
      comment3: comment[2],
      comment4: comment[3],
      comment5: comment[4],
      id: _id,
      orderNumber: orderNumber || 0
    });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="row">
              <form onSubmit={this.onSubmit}>
                <TextInputGroup
                  type="text"
                  label="Compay Name"
                  name="company_name"
                  placeholder="Enter Company Name..."
                  value={this.state.company_name}
                  onChange={this.onChange}
                  error={{}}
                ></TextInputGroup>
                <TextInputGroup
                  type="text"
                  label="Postion Name"
                  name="postion_name"
                  placeholder="Enter Postion Name..."
                  value={this.state.postion_name}
                  onChange={this.onChange}
                  error={{}}
                ></TextInputGroup>
                <TextInputGroup
                  type="text"
                  label="Work Date"
                  name="date"
                  placeholder="Enter Postion Name..."
                  value={this.state.date}
                  onChange={this.onChange}
                  error={{}}
                ></TextInputGroup>
                <p>Comments:</p>
                <TextInputGroup
                  type="text"
                  label="Comment 1"
                  name="comment1"
                  placeholder="Enter Comment 1..."
                  value={this.state.comment1}
                  onChange={this.onChange}
                  error={{}}
                ></TextInputGroup>
                <TextInputGroup
                  type="text"
                  label="Comment 2"
                  name="comment2"
                  placeholder="Enter Comment 2..."
                  value={this.state.comment2}
                  onChange={this.onChange}
                  error={{}}
                ></TextInputGroup>
                <TextInputGroup
                  type="text"
                  label="Comment 3"
                  name="comment3"
                  placeholder="Enter Comment 3 ..."
                  value={this.state.comment3}
                  onChange={this.onChange}
                  error={{}}
                ></TextInputGroup>
                <TextInputGroup
                  type="text"
                  label="Comment 4"
                  name="comment4"
                  placeholder="Enter Comment 4..."
                  value={this.state.comment4}
                  onChange={this.onChange}
                  error={{}}
                ></TextInputGroup>
                <TextInputGroup
                  type="text"
                  label="Comment 5"
                  name="comment5"
                  placeholder="Enter Comment 5..."
                  value={this.state.comment5}
                  onChange={this.onChange}
                  error={{}}
                ></TextInputGroup>
                <TextInputGroup
                  type="number"
                  label="Order Number"
                  name="orderNumber"
                  placeholder="Enter Order Number..."
                  value={this.state.orderNumber}
                  onChange={this.onChange}
                  error={{}}
                ></TextInputGroup>
                <button type="submit">Update</button>
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

export default WorkexperinceUpdate;
