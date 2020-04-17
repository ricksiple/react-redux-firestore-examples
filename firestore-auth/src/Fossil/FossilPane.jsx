import React, { Component, Fragment } from 'react'

import FossilList from "./FossilList";

import { connect } from "react-redux";

import { actions as fossilActions } from "../redux/fossil";

const mapStateToProps = (state, ownProps) => {
    return {
        records: state.fossil.records
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        rdxDelete: fossilActions.delete
    }
}
class FossilPane extends Component {
    render() {
        const { records } = this.props;
        return (
            <Fragment>
                <h1>Fossils</h1>
                <FossilList records={records} />
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FossilPane);
