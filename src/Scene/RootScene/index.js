import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../../actions/index';

class RootScene extends Component {

    render() {
        return (
            <div>
                RootScene
            </div>
        )
    }
}

const mapStateToProps = ({ categoryIds }) => {
    return {
        categories : categoryIds
    }
}

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })



RootScene = withRouter(connect(
    mapStateToProps,
    actions
)(RootScene));

export default RootScene;
