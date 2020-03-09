import React, { Component } from "react";
import { List, Image, Card, Loader, Dimmer } from "semantic-ui-react";

import { connect } from "react-redux";

import { actions as profileActions } from "../redux/profilesReducer";

const actions = {
  getProfileAsync: profileActions.getProfileAsync
};

const MapStateToProps = (state, ownProps) => {
  const p = state.profiles.profiles.find(
    profile => profile.id === ownProps.profileId
  );
  console.log(p);
  return {
    profile: p,
    loading: !p.imageUrl
  };
};

class ProfileItem extends Component {
  componentDidMount() {
    this.props.getProfileAsync(this.props.profileId);
  }

  render() {
    const { profile, loading } = this.props;
    return (
      <List.Item>
        <Card>
          {loading && (
            <Dimmer active>
              <Loader />
            </Dimmer>
          )}
          <div style={{ width: "200px", height: "300px" }}>
            <Image fluid src={profile.imageUrl} />
          </div>
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
