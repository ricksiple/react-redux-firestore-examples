import React, { Component } from "react";

import firebase from "../config/firebase";

const logout = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
};

class SignOut extends Component {
    render() {
        return (
            <div>
                <input
                    type="button"
                    value="Logout"
                    onClick={(e) => logout(e)}
                />
            </div>
        );
    }
}

export default SignOut;