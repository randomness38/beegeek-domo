import React from 'react'
import {ItemControls} from "../../utils/controls/index";
export const CommentItem = ({ comment, onRemove, onVote }) => {
    return (
        <div>
            <h3>{comment.body}</h3>
            <h4>{comment.timestamp}</h4>
            <p>{comment.author}</p>
            <div>
                <ItemControls
                    item={comment}
                    onReove={onRemove}
                    onVote={onVote}
                />
            </div>
        </div>
    )
}
