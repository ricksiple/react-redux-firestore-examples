import React, { Component, Fragment } from "react";

import FossilListItem from "./FossilListItem";

class FossilList extends Component {
  render() {
    const { records, deleteFossil } = this.props;
    return (
      <Fragment>
        {records && records.map((record) => (
          <FossilListItem key={record.id} record={record} deleteFossil={deleteFossil}/>
        ))}
      </Fragment>
    );
  }
}

export default FossilList;
