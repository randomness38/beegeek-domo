import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../../actions/index';
import { getComments } from "../../reducers/index";
import {CommentItem} from "./CommentItem";
import {doDeleteComment} from "../../actions/comments";
import CommentForm from "../../utils/form/CommentForm";
import {generateId, unixTimestamp} from "../../utils/form/formTools";



class CommentList extends Component {

  state = {
    isEditing : 'false,'
  };

  onEditing = () => {
    this.setState({ isEditing: true })
  }

  componentDidMount() {
      const { doFetchComments, idPost} = this.props;
      doFetchComments(idPost)

  }

  //Form submit method
  handleSubmit = (values) => {
    const { doAddComment, doEditComment, idPost  } = this.props;
    const objectData = {
      id: values.id || generateId(),
      timestamp: values.timestamp || unixTimestamp(),
      parentId: idPost,
      author: values.author,
      body: values.body,
    };

    return (
      !values.id
        ? doAddComment(objectData)
        : doEditComment(objectData)
    )
  };

    render() {
        const { comments, doAddComment, doVoteComment, doDeleteComment, doEditComment } = this.props;
        const { isEditing } = this.state;

        return (
            <div>
              <div>
                <h3>Create Comment!</h3>
                <CommentForm onSubmit={this.handleSubmit} />
              </div>
                { comments &&
                    (
                        comments.map( comment => {
                            return <CommentItem
                                key={comment.id}
                                comment={comment}
                                onVote={doVoteComment}
                                onRemove={doDeleteComment}
                                onEditing={this.onEditing}
                            />
                        })
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { idPost } = ownProps.match.params;

    return {
        idPost: idPost,
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
