import React, { Component } from "react";
import { withFirebase } from "react-redux-firebase";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "nobody@nowhere.com", password: "coffee932latte" };
  }

  onChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { firebase } = this.props;
    const { email, password, error } = this.state;

    return (
      <form>
        <label>Login</label>
        <p>{error && <label style={{ color: "red" }}>{error}</label>}</p>
        <p>
          email:{" "}
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.onChange}
          />
        </p>
        <p>
          password:{" "}
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.onChange}
          />
        </p>
        <p>
          <input
            type="button"
            value="Login"
            onClick={(e) => {
              e.preventDefault();
              //     email: "nobody@nowhere.com",
              //     password: "coffee932latte",
              firebase
                .login({
                  email: email,
                  password: password,
                })
                .catch((ex) => {
                  this.setState({ error: ex.message });
                });
            }}
          />
        </p>
      </form>
    );
  }
}

export default withFirebase(Login);
