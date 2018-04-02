import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../../actions/index';

class AddPost extends Component {

    componentDidMount() {
        this.props.doFetchCategories();

    }

    render() {
        return (
            <div>
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


AddPost = withRouter(connect(
    mapStateToProps,
    actions
)(AddPost));

export default AddPost;
