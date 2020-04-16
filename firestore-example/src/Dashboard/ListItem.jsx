import React, { Component } from "react";

export default class ListItem extends Component {
  render() {
    const { name, finder, location, description } = this.props.record;

    return (
      <div>
        <h2>{name}</h2>
        <p>{finder}</p>
        <p>{location}</p>
        <p>{description}</p>
      </div>
    );
  }
}
