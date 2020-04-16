import React, { Component } from "react";

import { connect } from "react-redux";

import { firestoreConnect } from "react-redux-firebase";

import List from "./List";

const mapStateToProps = (state, ownProps) => {
  return {
    records: state.firestore.ordered.fossil,
  };
};

class Dashboard extends Component {
  render() {
    const { records } = this.props;
    return (
      <div>
        <h1>Fossil Dashboard</h1>
        <List records={records} />
      </div>
    );
  }
}

// connect Dashboard to firestore
const fsListeners = [{ collection: "fossil" }];
const fsConnect = firestoreConnect(fsListeners)(Dashboard);

// connect Dashboard to redux
export default connect(mapStateToProps)(fsConnect);
