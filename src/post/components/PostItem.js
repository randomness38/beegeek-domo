import React from 'react'
import { Link } from 'react-router-dom';
import { ItemControls } from "../../utils/controls";


export const PostItem = ({ post, onVote, onRemove }) => {
    return (
        <div>
            {/*디테일 화면이로 이동 */}
            <Link
                to={`/${post.category}/${post.id}`}
            >
                {post.title}
            </Link>
            {/*컨트롤 바 */}
            <ItemControls
                item={post}
                onVote={onVote}
                onRemove={onRemove}
            />
        </div>
    )
}
