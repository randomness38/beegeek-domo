import React from 'react'
import {ItemControls} from "../../utils/controls/index";
import {dateTimeFormat, fromNow} from "../../utils/setDate/imdex";

export const CommentItem = ({ comment, onRemove, onVote }) => {
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
        </div>
    )
}
