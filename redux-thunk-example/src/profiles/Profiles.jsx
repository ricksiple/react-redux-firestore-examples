import React, { Fragment } from "react";
import { List, Button } from "semantic-ui-react";
import ProfileItem from "./ProfileItem";

import { connect } from "react-redux";

import { actions as profileActions } from "../redux/profilesReducer";

const actions = {
  getProfilesAsync: profileActions.getProfilesAsync
};

const MapStateToProps = state => ({
  profiles: state.profiles.profiles,
  loading: state.async.loading
});

const Profiles = props => {
  const { profiles, getProfilesAsync, loading } = props;
  return (
    <Fragment>
      <Button disabled={(loading > 0)} loading={(loading > 0)}
        onClick={() => {
          getProfilesAsync();
        }}
        content="Get Profiles"
      />
      <List horizontal>
        {profiles && profiles.map(profile => (
          <ProfileItem key={profile.id} profileId={profile.id} />
        ))}
      </List>
    </Fragment>
  );
};

export default connect(MapStateToProps, actions)(Profiles);
