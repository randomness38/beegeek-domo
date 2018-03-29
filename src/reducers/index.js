import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import categories from './categories'
import posts from './posts'
import comments from './comments'


const reducers = {
    categories,
    posts,
    comments,
    form: formReducer
};

export default combineReducers(reducers);
