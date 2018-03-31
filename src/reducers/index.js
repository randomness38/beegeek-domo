import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import categories from './categories'
// import posts from './posts'
import comments from './comments'

import byPostId, * as fromById from './byPostId';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
    all: createList('all'),
    react: createList('react'),
    redux: createList('redux'),
    udacity: createList('udacity'),
    removed: createList('removed'),
});

const reducers = {
    // categories,
    // posts,
    byPostId,
    // comments,
    listByFilter,
    form: formReducer
};

export default combineReducers(reducers);

export const getVisiblePosts = (state, filter) => {
    const ids = fromList.getIds(state.listByFilter[filter]);
    return ids.map(id => fromById.getPost(state.byPostId, id));
};
