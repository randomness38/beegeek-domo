import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import byPostId, * as fromByPostId from './byPostId';
import createPostListIds, * as fromPostList from './createPostListIds';
import byCommentId, * as fromByCommentId from './byCommentId';
import commentIds , * as fromCommentList from './commentIds';
import { byCategoryId, categoryIds } from './categories'
import * as types from '../actions/actionTypes'

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
    form: formReducer.plugin({
      postForm: (state, action) => {
        switch(action.type) {
          case types.ADD_POST:
            return undefined;
          case types.ADD_COMMENT:
            return undefined;
          case types.EDIT_POST:
            return undefined;
          case types.EDIT_COMMENT:
            return undefined;
          default:
            return state;
        }
      },

    })
};

export default combineReducers(reducers);

export const getVisiblePosts = (state, filter) => {
    const ids = fromPostList.getIds(state.postIdsByFilter[filter || 'all']);
    return ids.map(id => fromByPostId.getPost(state.byPostId, id));
};

// 이거 안먹힘 getVisiblePosts는 제대로 먹히는데 왜 얘는 에러가 날까요?
export const getComments = (state) => {
    const ids = state.commentIds;
    return ids.map(id => state.byCommentId[id]);
};
