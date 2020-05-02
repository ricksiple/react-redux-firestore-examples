import React, { useEffect, Fragment } from "react";

import firebase from "../config/firebase";

import { useSelector } from "react-redux";

import { actions as authActions } from "../redux/auth";
import { dispatch } from "../redux/store";

import SignIn from "./SignIn";
import SignOut from "./SignOut";
import Register from "./Register";

export const Auth = () => {

    useEffect(
        () => {
            // onAuthStateChange returns a function that can be used to unsubscribe from
            // auth state change events.  The useEffect hook will use this to cleanup
            // after every render and on unmount.  Cleanup after every render is suppressed
            // by the second argument to useEffect().
            return firebase.auth().onAuthStateChanged((currentUser) => {
                dispatch(authActions.authChange(currentUser));
            });
        },
        // The empty array will prevent React from executing "cleanup" after every render.
        []
        // NOTE:  Originally I used the "useDispatch" hook to get the Redux dispatch function.
        // However, for some reason the React Hook linter then thinks that "dispatch" should 
        // be in this dependecy array, I guess because it looks like local state?
        );

    const user = useSelector((state) => state.auth.firestore.user);
    return (
        <Fragment>
            {user ? (
                <Fragment>
                    <p>
                        Logged in as{" "}
                        {user.displayName ? user.displayName : user.email}
                    </p>
                    <SignOut />
                </Fragment>
            ) : (
                <Fragment>
                    <SignIn />
                    <Register />
                </Fragment>
            )}
        </Fragment>
    );
};

export default Auth;
