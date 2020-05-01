import React, { Component } from "react";

import { connect } from "react-redux";

import firebase from "../config/firebase";

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.firebase.auth
    }
}

const logout = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
};

class SignOut extends Component {
    render() {
        const { auth } = this.props;
        return (
            <div>
                <p>Logged in as {auth.displayName ? auth.displayName : auth.email}</p>
                <input
                    type="button"
                    value="Logout"
                    onClick={(e) => logout(e)}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps)(SignOut);