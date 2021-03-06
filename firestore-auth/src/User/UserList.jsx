import React, { Component, Fragment } from 'react'

import UserListItem from "./UserListItem";

export default class UserList extends Component {
    render() {
        const { records, deleteUser } = this.props;
        return (
            <Fragment>
                { records && records.map((record) => (
                    <UserListItem key={record.id} record={record} deleteUser={deleteUser} />
                ))}
            </Fragment>
        )
    }
}
