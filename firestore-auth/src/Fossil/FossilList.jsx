import React, { Component, Fragment } from "react";

import FossilListItem from "./FossilListItem";

class FossilList extends Component {
  render() {
    const { records } = this.props;
    return (
      <Fragment>
        {records.map((record) => (
          <FossilListItem key={record.id} record={record} />
        ))}
      </Fragment>
    );
  }
}

export default FossilList;
