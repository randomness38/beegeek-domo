import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../../actions/index';
import { ItemControls } from "../../utils/controls/index";
import getComments  from "../../reducers/index";
import CommentList from "../../comment/components/CommentList";

class PostDetail extends Component {
    componentDidMount() {
        const { doFetchAllPosts, doGetPost, doFetchComments, idPost } = this.props
        // doFetchAllPosts();
        doGetPost(idPost)
        doFetchComments(idPost)
    }

    render() {
        const { idPost, post, comments, doDeletePost, doVotePost } = this.props
        // doFetchComments(idPost).then((response) =>  console.log('response', response))
        return (

            <div>
                {
                    post && (
                        <div>

                            <div>
                                <h2>{post.title}</h2>
                                <h3>{post.body}</h3>
                                <h4>{post.author}</h4>
                                <p>{post.timestamp}</p>
                            </div>

                            <div>
                                <ItemControls
                                    item={post}
                                    onRemove={doDeletePost}
                                    onVote={doVotePost}
                                />
                            </div>

                            <div>
                                <Link to={`/edit/post/:${idPost}`}>
                                    Edit Post
                                </Link>
                            </div>

                            <div>
                                <CommentList/>
                            </div>

                        </div>




                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { idPost } = ownProps.match.params
    return {
        idPost: idPost,
        // get Selector 를 쓸때는 mapState 에서 state 파라미터 passing 할때 scope 생각하면서 도킹
        post: state.byPostId[idPost],
        comments: getComments(state)
    }
}

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


PostDetail = withRouter(connect(
    mapStateToProps,
    actions
)(PostDetail));

export default PostDetail;
