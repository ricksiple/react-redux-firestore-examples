import React, { Component, Fragment } from "react";

import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

const mapStateToProps = (state, ownProps) => {
    return {
        records: state.firestore.ordered.fossil,
    };
};

class Fossil extends Component {
    render() {
        const { records } = this.props;
        return (
            <Fragment>
                <h1>Fossils</h1>
                {records &&
                    records.map((r) => (
                        <Fragment key={r.id}>
                            <h2>{r.name}</h2>
                            <p>
                                Found by {r.finder} at {r.location}
                            </p>
                            <p>{r.description}</p>
                        </Fragment>
                    ))}
            </Fragment>
        );
    }
}

const enhance = compose(
    firestoreConnect([{ collection: "fossil" }]),
    connect(mapStateToProps)
);

export default enhance(Fossil);
