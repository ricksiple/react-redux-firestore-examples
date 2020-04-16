import React, { Component, Fragment } from "react";

import { connect } from "react-redux";

import { firestoreConnect, withFirebase } from "react-redux-firebase";

import List from "./List";
import Login from "./Login";

const mapStateToProps = (state, ownProps) => {
  return {
    records: state.firestore.ordered.fossil,
    auth: state.firebase.auth,
  };
};

class Dashboard extends Component {
  render() {
    const { records, auth, firebase } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;
    return (
      <Fragment>
        {authenticated ? (
          <Fragment>
            <h1>Fossil Dashboard</h1>
            <p>Logged in as {auth.email}</p>
            <input type="button" value="Logout" onClick={(e) => { firebase.logout(); }} />
            <List records={records} />
          </Fragment>
        ) : (
          <Login />
        )}
      </Fragment>
    );
  }
}

// add firebase methods
const fbConnect = withFirebase(Dashboard);

// connect Dashboard to firestore
const fsListeners = [{ collection: "fossil" }];
const fsConnect = firestoreConnect(fsListeners)(fbConnect);

// connect Dashboard to redux
export default connect(mapStateToProps)(fsConnect);
