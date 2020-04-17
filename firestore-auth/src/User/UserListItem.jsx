import React, { Component, Fragment } from "react";

export default class UserListItem extends Component {
    render() {
        const { record, deleteUser } = this.props;
        return (
            <Fragment>
                <h2>
                    {record.name}
                    <input
                        type="button"
                        value="X"
                        onClick={(e) => {
                            console.log("button.onClick()");
                            e.preventDefault();
                            deleteUser(record.id);
                        }}
                    />
                </h2>
                <p>{record.occupation}</p>
            </Fragment>
        );
    }
}
