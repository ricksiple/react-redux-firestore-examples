import React, { Component } from "react";

import firebase from "../config/firebase";

import { compose } from "redux";

import { Field, reduxForm } from "redux-form";

import { connect } from "react-redux";

const login = (e, cred) => {
    e.preventDefault();
    try {
        firebase.auth().signInWithEmailAndPassword(cred.email, cred.password);
    } catch (error) {
        console.log(error);
    }
};

const mapStateToProps = (state, ownProps) => {
    if (state.form.signIn && state.form.signIn.values) {
        return {
            cred: {
                email: state.form.signIn.values.email,
                password: state.form.signIn.values.password,
            },
            isNotReady: false,
        };
    } else {
        return {
            cred: null,
            isNotReady: true,
        };
    }
};

class SignIn extends Component {
    render() {
        const { cred, isNotReady } = this.props;
        return (
            <div>
                <label>Email: </label>
                <Field name="email" component="input" type="text" />
                <label>Password: </label>
                <Field name="password" component="input" type="password" />
                <input
                    type="button"
                    value="Login"
                    onClick={(e) => login(e, cred)}
                    disabled={isNotReady}
                />
            </div>
        );
    }
}

const enhance = compose(
    reduxForm({ form: "signIn" }),
    connect(mapStateToProps)
);
export default enhance(SignIn);
