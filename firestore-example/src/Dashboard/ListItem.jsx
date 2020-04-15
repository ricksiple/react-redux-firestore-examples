import React, { Component } from "react";

export default class ListItem extends Component {
  render() {

    const { rdxDelete } = this.props;

    const {
      id,
      name,
      finder,
      location,
      description
    } = this.props.record;
    
    return (
      <div>
        <h2>
          {name}
          <input
            type="button"
            value="X"
            onClick={(e) => {
              e.preventDefault = true;
              rdxDelete(id);
            }}
          />
        </h2>
        <p>{finder}</p>
        <p>{location}</p>
        <p>{description}</p>
      </div>
    );
  }
}
