import React from "react";
import "./App.css";

import { compose } from "redux";

import { Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";

import { useFirebase } from "react-redux-firebase";

import { Field, reduxForm } from "redux-form";

import FossilPane from "./Fossil/FossilPane";
import UserPane from "./User/UserPane";

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.firebase.auth,
        cred: {
            email:
                state.form.App && state.form.App.values
                    ? state.form.App.values.email
                    : "",
            password:
                state.form.App && state.form.App.values
                    ? state.form.App.values.password
                    : ""
        },
    };
};

const login = (e, firebase, cred) => {
    e.preventDefault();
    console.log(cred);
    firebase.login({
        email: cred.email,
        password: cred.password,
    });
};

const logout = (e, firebase) => {
    e.preventDefault();
    firebase.logout();
};

function App(props) {
    const { auth, cred } = props;
    const firebase = useFirebase();
    return (
        <div className="App">
            <div>
                {auth.isEmpty ? (
                    <form>
                        <label>Email: </label>
                        <Field
                            name="email"
                            component="input"
                            type="text"
                            value="rick@sipleart.com"
                        />
                        <label>Password: </label>
                        <Field
                            name="password"
                            component="input"
                            type="password"
                            value="Rick1Junk"
                        />
                        <input
                            type="button"
                            value="Login"
                            onClick={(e) => login(e, firebase, cred)}
                        />
                    </form>
                ) : (
                    <div>
                        <p>Logged in as {auth.email}</p>
                        <input
                            type="button"
                            value="Logout"
                            onClick={(e) => logout(e, firebase)}
                        />
                    </div>
                )}
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/fossil">Fossils</Link>
                    </li>
                    <li>
                        <Link to="/user">Users</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/user">
                    <UserPane />
                </Route>
                <Route path="/fossil">
                    <FossilPane />
                </Route>
            </Switch>
        </div>
    );
}

const enhance = compose(reduxForm({ form: "App" }), connect(mapStateToProps));

export default enhance(App);
