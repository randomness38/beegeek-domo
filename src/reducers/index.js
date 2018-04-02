import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import byPostId, * as fromByPostId from './byPostId';
import createPostListIds, * as fromPostList from './createPostListIds';
import byCommentId, * as fromByCommentId from './byCommentId';
import commentIds , * as fromCommentList from './commentIds';
import { byCategoryId, categoryIds } from './categories'


const postIdsByFilter = combineReducers({
    all: createPostListIds('all'),
    react: createPostListIds('react'),
    redux: createPostListIds('redux'),
    udacity: createPostListIds('udacity'),
});

const reducers = {
    byPostId,
    postIdsByFilter,
    byCategoryId,
    categoryIds,
    byCommentId,
    commentIds,
    form: formReducer
};

export default combineReducers(reducers);

export const getVisiblePosts = (state, filter) => {
    const ids = fromPostList.getIds(state.postIdsByFilter[filter || 'all']);
    return ids.map(id => fromByPostId.getPost(state.byPostId, id));
};

// 어디서는 filter 를 돌려서 comment.parendId === parentID ? 해야 하는데
export const getComments = (state) => {
    const ids = fromCommentList.getIds(state);
    return ids.map(id => fromByCommentId.getComment(state.byCommentId, id));
};
