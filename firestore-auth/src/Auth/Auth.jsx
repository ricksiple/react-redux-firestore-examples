import React, { Component, Fragment } from "react";

import { connect } from "react-redux";

import firebase from "../config/firebase";
import { actions as authActions } from "../redux/auth";

import SignIn from "./SignIn";
import SignOut from "./SignOut";
import Register from "./Register";

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.auth.firestore.user
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        authChange: (user) => dispatch(authActions.authChange(user))
    }
};

const getDisplayName = (user) => {
    return user ? (user.displayName && user.email) : null;
}

class Auth extends Component {
    componentDidMount() {
        console.log("ComponentDidMount");
        this.stopListening = firebase.auth().onAuthStateChanged((user) => {
            console.log(user);
            this.props.authChange(user);
        });
    }

    componentWillUnmount() {
        console.log("ComponentWillUnmount");
        this.stopListening();
    }

    render() {
        const { user } = this.props;
        console.log("render");
        return (
            <Fragment>
                {user ? (
                    <SignOut />
                ) : (
                    <Fragment>
                        <SignIn />
                        <Register />
                    </Fragment>
                )}
            </Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
