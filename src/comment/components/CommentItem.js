import React, {Component} from 'react'
import {connect} from "react-redux";
import * as actions from '../../actions'
import {ItemControls} from "../../utils/controls/index";
import {dateTimeFormat, fromNow} from "../../utils/setDate/imdex";
import EditCommentForm from "../../utils/form/EditCommentForm";


export class CommentItem extends Component {


  render () {
    const {comment, onRemove, idPost, onVote, doOpenEditing, open, editedId} = this.props;

    return (
        <div>
          { (open && editedId === comment.id)
            ? (
            <EditCommentForm
            />
            )
            : (
            <div>
              <h3>{comment.body}</h3>
              <time dateTime={ dateTimeFormat(comment.timestamp)}>{ fromNow(comment.timestamp)}</time>

              {/*<h4>{dateTimeFormat(comment.timestamp)}</h4>*/}
              <p>{comment.author}</p>
              <div>
                <ItemControls
                  item={comment}
                  onRemove={onRemove}
                  onVote={onVote}
                />
              </div>
              <button onClick={() => doOpenEditing(comment.id)}>Edit Comment</button>
            </div>

          )}
        </div>
    )
  }
}
const mapStateToProps = (state) => {

  return {
    editedId: state.IsEditing.id,
    open: state.IsEditing.open
  }
}

CommentItem = connect(
  mapStateToProps,
  actions
)(CommentItem);

export default CommentItem;
