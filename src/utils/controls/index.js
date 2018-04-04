import React from 'react'

// 얘가 post 나 comment 에서 모두 재사용되려면 props 가
export const ItemControls = ({ item, onVote, onRemove, idPost, category }) => {

    return (
        <div>
            <p>{ (item.commentCount === undefined) ? '' :`${item.commentCount} comments`}</p>
            <button onClick={() =>onVote(item.id, "upVote")}>Up</button>
            <p>{item.voteScore}</p>
            <button onClick={() => onVote(item.id, "downVote")}>Down</button>
            <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
    )
}
