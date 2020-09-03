import React, { Component } from "react";
import Users from '../../../api/User';
class Login extends Component {

    state = {
        username: "",
        password: "",
        submitted: false,
        loading: false,
        error: ""
    };

    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;

        if (!(username && password)) {
            return;
        }

        this.setState({ loading: true });
        Users.signInUser(username, password).then((res) => {
            this.props.authSwitch();
            this.props.setToken(res.data.token);
            this.props.history.push("/CRUD/");
        }).catch((error) => {
            this.setState({ error, loading: false });
        });
    }

    render() {
        return (
            <div style={
                {
                    paddingTop: "10%",
                    width: "30%",
                    margin: "25px auto",
                    textAlign: "center"
                }
            }>
                <h1>Login</h1>
                <form onSubmit={
                    this.onSubmit
                }>
                    <div className="form-group">
                        <input className="form-control" type="text" name="username" placeholder="username"
                            onChange={
                                this.onChange
                            } />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" name="password" placeholder="password"
                            onChange={
                                this.onChange
                            } />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-lg btn-primary btn-block">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
