import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../../actions';
import PostList from "../../post/components/PostList";

class PostListScene extends Component {

    // componentDidMount() {
    //     this.props.doFetchAllPosts();
    // }

    render() {
        return (
            <div>
                <PostList />
            </div>
        )
    }
}

/**
 * root 가 아닌 일반 컴포넌트에서도 withRouter 가 있으면 아래 코드 쓸 수 있는건가
 * 그럼 굳이 여기서 쓸 필요가 있나? ( Y )
 */

// const mapStateToProps = (state, ownProps) => {
//     const { params } = ownProps.match
//     return {
//         filter : params.categoryName
//     }
// }

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


// export default PostListScene = connect(
//     mapStateToProps,
//     actions
// )(PostListScene);

export default PostListScene

