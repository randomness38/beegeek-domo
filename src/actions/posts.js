import * as types from './actionTypes'
import * as api from "../api";

export const doFetchAllPosts = () => (dispatch) => {
    return api.fetchAllPosts()
        .then((posts) => dispatch({
            type: types.LOAD_ALL_POSTS,
            posts,
    }))
}

export const doFetchPostsByCategory = (category) => (dispatch) => {
    return api.fetchPostsByCategory(category)
        .then(posts => dispatch({
            type: types.LOAD_POSTS_BY_CATEGORIES,
            posts,
        }))
}

export const doAddPost = (post) => (dispatch) => {
    return api.addPost(post)
        .then(post => dispatch({
            type: types.ADD_POST,
            post,
        }))
}

// 이건 셀렉터가 하는 일 아닐까 get 붙은거 보니..
export const doGetPost = (id) => (dispatch) => {
    return api.getPost(id)
        .then(post => dispatch({
            type: types.LOAD_POST,
            post
        }))
}


export const doVotePost = (id, option) => (dispatch) => {
    return api.votePost(id, option)
        .then(post => dispatch({
            type: types.VOTE_POST,
            post
        }))
}

export const doEditPost = (id, post) => (dispatch) => {
    return api.editPost(id, post)
        .then(post => dispatch({
            type: types.EDIT_POST,
            post
        }))
}




export const doDeletePost = (id) => (dispatch) => {
    return api.deletePost(id)
        .then(post => dispatch({
            type: types.DELETE_POST,
            post
        }))
}
