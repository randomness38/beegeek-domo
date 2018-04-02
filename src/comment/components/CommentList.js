import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../../actions/index';
import { getComments } from "../../reducers/index";
import {CommentItem} from "./CommentItem";

class CommentList extends Component {
    componentDidMount() {
        const { doFetchComments, idPost} = this.props
        doFetchComments(idPost)

    }
    render() {
        const { comments, doAddComment, doVoteComment, doEditComment, doDeleteComment } = this.props
        console.log(comments)
        return (
            <div>
                { comments &&
                    (
                        comments.map( comment => {
                            return <CommentItem
                                ket={comment.id}
                                comment={comment}
                                onVote={doVoteComment}
                                onRemove={doDeleteComment}
                            />
                        })
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
        comments: getComments(state)
    }
}

// const mapDispatchToProps = dispatch => ({
//     dispatcherName: () => dispatch(dispatcherName()),
// })


CommentList = withRouter(connect(
    mapStateToProps,
    actions
)(CommentList));

export default CommentList;
