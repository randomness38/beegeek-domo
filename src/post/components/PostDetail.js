import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../../actions/index';
import { ItemControls } from "../../utils/controls/index";
import CommentList from "../../comment/components/CommentList";
import {dateTimeFormat, fromNow} from "../../utils/setDate/imdex";

class PostDetail extends Component {
    componentDidMount() {
        const { doGetPost, doFetchComments, idPost } = this.props;
        doGetPost(idPost).then((post)=> console.log(post));
        // 여기서 에러남 comments 를 못받아먹음
        doFetchComments(idPost);
    }

    RemovePost = (id) => {
      const {doDeletePost} = this.props;
      doDeletePost(id)
      //window.history 가 아니라 this.props.history.push!
        .then(() => this.props.history.push(`/${this.props.category}`))
    };

    render() {
        const { idPost, post, category, comments, doDeletePost, doVotePost } = this.props;
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
                                <time dateTime={ dateTimeFormat(post.timestamp)}>{ fromNow(post.timestamp)}</time>

                            </div>

                            <div>
                                <ItemControls
                                    item={post}
                                    onRemove={this.RemovePost}
                                    onVote={doVotePost}
                                    category={category}
                                    idPost={idPost}
                                />
                            </div>

                            <div>
                              <button>
                                <Link to={`/edit/post/${idPost}`}>
                                  Edit
                                </Link>
                              </button>

                            </div>
                        </div>
                    )

                }
              {
                comments &&
                <div>
                  <CommentList/>
                </div>
              }

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { idPost, category } = ownProps.match.params;
    return {
        idPost: idPost,
        category: category,
        // // get Selector 를 쓸때는 mapState 에서 state 파라미터 passing 할때 scope 생각하면서 도킹
        post: state.byPostId[idPost],
        comments: state.commentIds.map(id => state.byCommentId[id])
    }
};

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


PostDetail = withRouter(connect(
    mapStateToProps,
    actions
)(PostDetail));

export default PostDetail;
