import React, { Component, Fragment } from "react";

import FossilList from "./FossilList";

import { connect } from "react-redux";

import { actions as fossilActions } from "../redux/fossil";

const mapStateToProps = (state, ownProps) => {
    return {
        records: state.fossil.records,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteFossil: (id) => {
        dispatch(fossilActions.delete(id));
    }
});

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

export default connect(mapStateToProps, mapDispatchToProps)(FossilPane);
