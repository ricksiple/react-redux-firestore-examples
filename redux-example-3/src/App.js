import React, { Component, Fragment } from "react";
import "./App.css";

import { connect } from "react-redux";
import { List, Button, Icon } from "semantic-ui-react";

import fossilMatryx from "./matryx/fossilsMatryx";
import authMatryx from "./matryx/authMatryx";
const actions = { ...fossilMatryx.getActions(), ...authMatryx.getActions() };

const MapStateToProps = state => {
  return {
    records: state.fossils.records,
    isAuthenticated: state.auth.isAuthenticated
  };
};

class App extends Component {
  render() {
    const {
      records,
      isAuthenticated,
      rdxDelete,
      rdxLogin,
      rdxLogout
    } = this.props;
    return (
      <Fragment>
        <List>
          {records &&
            records.map(record => (
              <List.Item key={record.name}>
                <span>
                  Found {record.name} at {record.location}
                </span>
                <Button
                  onClick={() => {
                    rdxDelete(record.name);
                  }}
                >
                  <Icon name="trash" />
                </Button>
              </List.Item>
            ))}
        </List>
        <span>{isAuthenticated ? "Authenticated" : "Not Authenticated"}</span>
        {isAuthenticated ? (
          <Button
            onClick={e => {
              rdxLogout();
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            onClick={e => {
              rdxLogin();
            }}
          >
            Login
          </Button>
        )}
      </Fragment>
    );
  }
}

export default connect(MapStateToProps, actions)(App);
