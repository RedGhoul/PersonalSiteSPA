import React, { Component } from "react";
import axios from "axios";
export class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      password2: "",
      submitted: false,
      loading: false,
      error: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, firstName, lastName, password, password2 } = this.state;

    // stop here if form is invalid
    if (!(email && password)) {
      return;
    }

    if (password2 !== password) {
      return;
    }

    this.setState({ loading: true });

    axios
      .post(`http://localhost:8080/auth/register`, {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password
      })
      .then(res => {
        this.props.authSwitch();
        this.props.setToken(res.data.token);
        this.props.history.push("/CRUD/");
      })
      .catch(error => {
        this.setState({ error: error, loading: false });
      });
  }

  render() {
    return (
      <div
        style={{
          paddingTop: "10%",
          width: "30%",
          margin: "25px auto",
          textAlign: "center"
        }}
      >
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="text"
              name="email"
              value={this.state.email}
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              value={this.state.firstName}
              placeholder="Enter firstName"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              value={this.state.lastName}
              placeholder="Enter Last Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="text"
              name="password"
              value={this.state.password}
              placeholder="Enter Last Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Verify Password</label>
            <input
              className="form-control"
              type="text"
              name="password2"
              value={this.state.password2}
              placeholder="Enter Last Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-lg btn-primary btn-block">
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterPage;
