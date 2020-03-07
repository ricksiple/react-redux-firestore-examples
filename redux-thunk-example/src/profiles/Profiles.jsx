import React, { Fragment } from "react";
import { List, Button } from "semantic-ui-react";
import { ProfileItem } from "./ProfileItem";

import { connect } from "react-redux";

import { actions as profileActions } from "../redux/profilesReducer";

const actions = {
  getProfilesAsync: profileActions.getProfilesAsync
};

const MapStateToProps = state => ({
  profiles: state.profiles.profiles
});

const Profiles = props => {
  const { profiles, getProfilesAsync } = props;
  return (
    <Fragment>
      <Button
        onClick={() => {
          getProfilesAsync();
        }}
        content="Get Profiles"
      />
      <List>
        {profiles.map(profile => (
          <ProfileItem profile={profile} />
        ))}
      </List>
    </Fragment>
  );
};

export default connect(MapStateToProps, actions)(Profiles);
