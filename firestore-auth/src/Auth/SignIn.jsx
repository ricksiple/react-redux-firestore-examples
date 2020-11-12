import React, { Component, Fragment } from "react";

import firebase from "../config/firebase";

import { compose } from "redux";

import { reduxForm, Field } from "redux-form";
import { TextInput } from "../Form/TextInput";

import { connect } from "react-redux";

import { combineValidators, isRequired } from "revalidate";

const validate = combineValidators({
    email: isRequired({ message: "Email is required." }),
    password: isRequired({ message: "Password is required." }),
});

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
        };
    } else {
        return {
            cred: null,
        };
    }
};

class SignIn extends Component {
    render() {
        const { cred, submitting, invalid } = this.props;
        return (
            <Fragment>
                <Field
                    component={TextInput}
                    name="email"
                    type="text"
                    label="Email: "
                />
                <Field
                    component={TextInput}
                    name="password"
                    type="password"
                    label="Password: "
                />
                <input
                    type="button"
                    value="Login"
                    onClick={(e) => login(e, cred)}
                    disabled={invalid || submitting}
                />
            </Fragment>
        );
    }
}

const enhance = compose(
    reduxForm({ form: "signIn", validate }),
    connect(mapStateToProps)
);
export default enhance(SignIn);
