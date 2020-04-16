import React, { Component, Fragment } from "react";

import ListItem from "./ListItem";

class List extends Component {
  render() {
    const { records } = this.props;
    return (
      <Fragment>
        {records && records.map((r) => <ListItem key={r.id} record={r} />)}
      </Fragment>
    );
  }
}

export default List;
