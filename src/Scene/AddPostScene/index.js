import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../../actions/index';

class AddPostScene extends Component {
    render() {
        return (
            <div>
                AddPostScene
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const {params} = ownProps.match
    return {
        state
    }
}

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


AddPostScene = withRouter(connect(
    mapStateToProps,
    {actions}
)(AddPostScene));

export default AddPostScene;
