import React, { Component, Fragment } from 'react'

import UserListItem from "./UserListItem";

export default class UserList extends Component {
    render() {
        const { records, deleteUser } = this.props;
        return (
            <Fragment>
                { records.map((record) => (
                    <UserListItem record={record} deleteUser={deleteUser} />
                ))}
            </Fragment>
        )
    }
}
