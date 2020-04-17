import React, { Component, Fragment } from "react";

class FossilListItem extends Component {
    render() {
        const { record, deleteFossil } = this.props;
        return (
            <Fragment>
                <h2>
                    {record.name}
                    <input type="button" value="X" 
                    onClick={(e) => {
                      console.log("button.onClick()");
                      e.preventDefault();
                      deleteFossil(record.id);
                    }}
                    />
                </h2>
                <p>
                    Found by {record.finder} at {record.location}
                </p>
                <p>{record.description}</p>
            </Fragment>
        );
    }
}

export default FossilListItem;
