import React, { Component, Fragment } from "react";

import firebase from "../config/firebase";

import { compose } from "redux";

import { reduxForm, Field } from "redux-form";
import { combineValidators, isRequired } from "revalidate";
import { TextInput } from "../Form/TextInput";

import { connect } from "react-redux";

const validate = combineValidators({
    email: isRequired({message: "Email is a required field."}),
    password: isRequired({message: "Password is a required field."}),
    displayName: isRequired({message: "Name is a required field."})
});

const mapStateToProps = (state, ownProps) => {
    if (state.form.register && state.form.register.values) {
        return {
            cred: {
                email: state.form.register.values.email,
                password: state.form.register.values.password,
                displayName: state.form.register.values.displayName,
            }
        };
    } else {
        return {
            cred: null
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
        const { cred, invalid, submitting } = this.props;
        return (
            <Fragment>
                {" "}
                <label>Email: </label>
                <Field name="email" component={TextInput} type="text" />
                <label>Password: </label>
                <Field name="password" component={TextInput} type="password" />
                <label>Name: </label>
                <Field name="displayName" component={TextInput} type="text" />
                <input
                    type="button"
                    value="Register"
                    onClick={(e) => register(e, cred)}
                    disabled={invalid || submitting }
                />
            </Fragment>
        );
    }
}

const enhance = compose(
    reduxForm({ form: "register", validate }),
    connect(mapStateToProps)
);

export default enhance(Register);
