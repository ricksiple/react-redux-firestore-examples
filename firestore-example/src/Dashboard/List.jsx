import React, { Component, Fragment } from 'react'

import ListItem from "./ListItem";

class List extends Component {
    render() {
        const {records, rdxDelete} = this.props;
        return (
            <Fragment>
                {records && records.map((r) =>  
                    <ListItem record={r} rdxDelete={rdxDelete} />
                )}
            </Fragment>
        )
    }
}

export default List;