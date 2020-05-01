import React, { Component, Fragment } from "react";

import firebase from "../config/firebase";

import { compose } from "redux";

import { reduxForm, Field } from "redux-form";

import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    if (state.form.register && state.form.register.values) {
        return {
            cred: {
                email: state.form.register.values.email,
                password: state.form.register.values.password,
                displayName: state.form.register.values.displayName,
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

const register = (e, cred) => {
    e.preventDefault();
    // add new user to firestore
    firebase
        .auth()
        .createUserWithEmailAndPassword(cred.email, cred.password)
        .then((newUser) => {
            newUser.user
                .updateProfile({ displayName: cred.displayName })
                .then(() => {
                    firebase
                        .firestore()
                        .collection("user")
                        .doc(newUser.user.uid)
                        .set({ displayName: cred.displayName });
                });
        })
        .catch((error) => {
            console.log(error);
        });
};

class Register extends Component {
    render() {
        const { cred, isNotReady } = this.props;
        return (
            <Fragment>
                {" "}
                <label>Email: </label>
                <Field name="email" component="input" type="text" />
                <label>Password: </label>
                <Field name="password" component="input" type="password" />
                <label>Name: </label>
                <Field name="displayName" component="input" type="text" />
                <input
                    type="button"
                    value="Register"
                    onClick={(e) => register(e, cred)}
                    disabled={isNotReady}
                />
            </Fragment>
        );
    }
}

const enhance = compose(
    reduxForm({ form: "register" }),
    connect(mapStateToProps)
);

export default enhance(Register);
