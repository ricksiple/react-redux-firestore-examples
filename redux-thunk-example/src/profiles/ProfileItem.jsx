import React, { Component } from "react";
import { List, Image, Card } from "semantic-ui-react";

import { connect } from "react-redux";

import { actions as profileActions } from "../redux/profilesReducer";

const actions = {
  getProfileAsync: profileActions.getProfileAsync
};

const MapStateToProps = (state, ownProps) => {
  const p = state.profiles.profiles.find(profile => (profile.id === ownProps.profileId));
  return {
    profile: p
  };
};

class ProfileItem extends Component {
  constructor() {
    super();
    this.state = {
      profile: {
        id: "?",
        lastName: "?",
        firstName: "?",
        rank: "?",
        imageUrl: "?"
      }
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.props.getProfileAsync(this.props.profileId);
  }

  render() {
    console.log("render")
    const { profileId, getProfileAsync } = this.props;
    const { profile } = this.state;
    return (
      <List.Item>
        <Card>
          <Image
            circular
            src={profile.imageUrl}
            style={{ width: "200px", height: "300px" }}
          />
          <Card.Content>
            <Card.Header>{profile.lastName}</Card.Header>
            <Card.Meta>
              <span className="date">{profile.rank}</span>
            </Card.Meta>
            <Card.Description>{profile.firstName}</Card.Description>
          </Card.Content>
        </Card>
      </List.Item>
    );
  }
}

export default connect(MapStateToProps, actions)(ProfileItem);
