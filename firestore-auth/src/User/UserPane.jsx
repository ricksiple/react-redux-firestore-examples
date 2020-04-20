import React, { Component, Fragment } from 'react'

import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import UserList from "./UserList";

const mapStateToProps = (state, ownProps) => {
    return {
        records: state.firestore.ordered.user
    }
}

class UserPane extends Component {
    render() {
        const { records, deleteUser } = this.props;
        return (
            <Fragment>
                <h1>Users</h1>
                <UserList records={records} deleteUser={deleteUser} />
            </Fragment>
        )
    }
}

const enhance = compose(
    firestoreConnect([{collection: "user"}]),
    connect(mapStateToProps)
)

export default enhance(UserPane);