import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../../actions/index';
import { getComments } from "../../reducers/index";
import {CommentItem} from "./CommentItem";
import {doDeleteComment} from "../../actions/comments";
import {generateId, unixTimestamp} from "../../utils/form/formTools";
import CreateCommentForm from "../../utils/form/CreateCommentForm";

class CommentList extends Component {

  componentDidMount() {
      const { doFetchComments, idPost} = this.props;
      doFetchComments(idPost)

  }


    render() {
        const { comments, doVoteComment, doDeleteComment,idPost } = this.props;

        return (
            <div>
              <div>
                <CreateCommentForm
                />
              </div>
                { comments &&
                    (
                        comments.map( comment => {
                            return (<CommentItem
                                key={comment.id}
                                comment={comment}
                                onVote={doVoteComment}
                                onRemove={doDeleteComment}
                            />);
                        })

                    )
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: getComments(state).sort((a,b) => a.timestamp < b.timestamp)
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
