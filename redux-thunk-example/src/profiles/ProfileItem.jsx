import React, { Component } from "react";
import { List } from "semantic-ui-react";

export class ProfileItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { profile } = this.props;
    return (
      <List.Item key={profile.id}>
        <List.Description>{profile.lastName}</List.Description>
      </List.Item>
    );
  }
}

export default ProfileItem;
