import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions';
import NavBar from '../../NavBar'

class RootScene extends Component {
    render() {
        return (
            <div>
                <NavBar />
            </div>
        )
    }
}

const mapStateToProps = ({state}) => {
    return {
        state
    }
}

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })

export default connect(
    mapStateToProps,
    {actions}
)(RootScene)
