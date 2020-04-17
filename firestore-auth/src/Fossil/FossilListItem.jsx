import React, { Component, Fragment } from "react";

class FossilListItem extends Component {
  render() {
    const { record } = this.props;
    return (
      <Fragment>
        <h2>{record.name}</h2>
        <p>
          Found by {record.finder} at {record.location}
        </p>
        <p>{record.description}</p>
      </Fragment>
    );
  }
}

export default FossilListItem;
