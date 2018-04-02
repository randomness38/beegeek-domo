import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../../actions/index';

class EditPostScene extends Component {
    render() {
        return (
            <div>
                EditPostScene
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


EditPostScene = withRouter(connect(
    mapStateToProps,
    {actions}
)(EditPostScene));

export default EditPostScene;
