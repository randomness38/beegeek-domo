import React, {Component} from 'react'
import {connect} from "react-redux";

import {ItemControls} from "../../utils/controls/index";
import {dateTimeFormat, fromNow} from "../../utils/setDate/imdex";
import CommentForm from "../../utils/form/CommentForm";
export class CommentItem extends Component {

  state = {
    isEditing : 'false,'
  };

  onEditing = () => {
    this.setState({ isEditing: !this.state.isEditing })
  };

  componentDidMount() {
    this.props.closeEditing === true && this.onEditing()
  }

  render () {
    const {comment, onRemove, onVote} = this.props;
    const { isEditing } = this.state;

    return (
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
          <button onClick={this.onEditing}>Edit Comment</button>
          { isEditing === true && (
            <CommentForm
              commentId={comment.id}
              onEditing={this.onEditing}
            />
          )}
        </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    closeEditing: state.form.commentForm.submitSucceeded,
  }
}

export default connect(
  mapStateToProps, null
)(CommentItem);
