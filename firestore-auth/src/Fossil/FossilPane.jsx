import React, { Component, Fragment } from "react";

import FossilList from "./FossilList";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import { compose } from "redux";

const mapStateToProps = (state, ownProps) => {
    return {
        records: state.firestore.ordered.fossil,
    };
};

class FossilPane extends Component {
    render() {
        const { records, deleteFossil } = this.props;
        return (
            <Fragment>
                <h1>Fossils</h1>
                <FossilList records={records} deleteFossil={deleteFossil} />
            </Fragment>
        );
    }
}

const enhance = compose(
    firestoreConnect([{collection:'fossil'}]),
    connect(mapStateToProps)
);

export default enhance(FossilPane);
