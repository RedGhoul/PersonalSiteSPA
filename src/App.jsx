import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import LoginPage from "./components/CRUD/LoginPage/Login";
import RegisterPage from "./components/CRUD/RegisterPage/RegisterPage";
import ProjectCardUpdateForm from "./components/CRUD/ProjectsPage/ProjectCardUpdateForm";
import ProjectCardCreateForm from "./components/CRUD/ProjectsPage/ProjectCardCreateForm";
import FrontPage from "./components/CRUD/FrontPage";
import CURDHeader from "./components/CRUD/CURDHeader/CURDHeader";
import WorkexperienceCreate from "./components/CRUD/WorkexperincePage/WorkexperienceCreate";
import WorkexperinceUpdate from "./components/CRUD/WorkexperincePage/WorkexperinceUpdate";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

  }
  state = {
    isLoggedin: false,
    jwtToken: "",
  };

  changeLoginState = () => {
    this.setState({
      isLoggedin: !this.state.isLoggedin,
    });
  }

  setToken = (value) => {
    this.setState({
      jwtToken: value,
    });
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            {this.state.isLoggedin ? (
              <React.Fragment>
                <CURDHeader logout={this.changeLoginState}></CURDHeader>
                <Route
                  exact
                  path="/CRUD/WorkexperinceUpdate/"
                  render={(props) => <WorkexperinceUpdate {...props} />}
                />
                <Route
                  exact
                  path="/CRUD/ProjectUpdate/"
                  render={(props) => <ProjectCardUpdateForm {...props} />}
                />
                <Route
                  exact
                  path="/CRUD/NewProject"
                  render={(props) => (
                    <ProjectCardCreateForm
                      {...props}
                      token={this.state.jwtToken}
                    />
                  )}
                />
                <Route
                  exact
                  path="/CRUD/"
                  render={(props) => (
                    <FrontPage {...props} token={this.state.jwtToken} />
                  )}
                />

                <Route
                  exact
                  path="/CRUD/NewWorkExperince"
                  render={(props) => (
                    <WorkexperienceCreate
                      {...props}
                      token={this.state.jwtToken}
                    />
                  )}
                />
              </React.Fragment>
            ) : null}

            <Route
              exact
              path="/Login"
              render={(props) => (
                <LoginPage
                  {...props}
                  authSwitch={this.changeLoginState}
                  setToken={this.setToken}
                />
              )}
            />
            <Route
              exact
              path="/Register"
              render={(props) => (
                <RegisterPage
                  {...props}
                  authSwitch={this.changeLoginState}
                  setToken={this.setToken}
                />
              )}
            />
            <Route path="/" component={MainPage} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
