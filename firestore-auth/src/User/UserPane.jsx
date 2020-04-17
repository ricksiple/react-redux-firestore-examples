import React, { Component, Fragment } from 'react'

import { connect } from "react-redux";

import UserList from "./UserList";

import { actions as userActions } from "../redux/user";

const mapStateToProps = (state, ownProps) => {
    return {
        records: state.user.records
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteUser: (id) => {
            dispatch(userActions.delete(id));
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(UserPane);