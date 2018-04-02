import { normalize } from 'normalizr'
import * as schema from './schema'
import * as types from './actionTypes'
import * as api from "../utils/api"

// TODO: 이제 더이상 doFetchAllPosts 가 아니에여~ 걍 싹 fetch 해서 Ids 로 관리할거임
// TODO: 이제 action data 로 filter 를 받음 result.posts 커스텀할 때 Ids Reducer 에서 사용 !
export const doFetchAllPosts = () => (dispatch) => {
    return api.fetchAllPosts()
        .then((posts) => {
            // console.log('normalized response', normalize(posts, schema.arrayOfPosts))
            dispatch({
            type: types.LOAD_ALL_POSTS,
            response : normalize(posts, schema.arrayOfPosts),
    })})
}


export const doFetchPostsByCategory = (filter) => (dispatch) => {
    return api.fetchPostsByCategory(filter)

        .then(posts => {
            // console.log('normalized response', normalize(posts, schema.arrayOfPosts))
            // console.log('filter',filter)
            dispatch({

            type: types.LOAD_POSTS_BY_CATEGORY,
            response : normalize(posts, schema.arrayOfPosts),
            filter,
        })})
}

export const doAddPost = (post) => (dispatch) => {
    return api.addPost(post)
        .then(post => dispatch({
            type: types.ADD_POST,
            response : normalize(post, schema.post),

        }))
}

// 이건 셀렉터가 하는 일 아닐까 get 붙은거 보니..
export const doGetPost = (id) => (dispatch) => {
    return api.getPost(id)
        .then(post => dispatch({
            type: types.LOAD_POST,
            response : normalize(post, schema.post),
        }))
}


export const doVotePost = (id, option) => (dispatch) => {
    return api.votePost(id, option)
        .then(post => dispatch({
            type: types.VOTE_POST,
            response : normalize(post, schema.post),
        }))
}

export const doEditPost = (id, post) => (dispatch) => {
    return api.editPost(id, post)
        .then(post => dispatch({
            type: types.EDIT_POST,
            response : normalize(post, schema.post),
        }))
}




export const doDeletePost = (id) => (dispatch) => {
    return api.deletePost(id)
        .then(post => dispatch({
            type: types.DELETE_POST,
            response : normalize(post, schema.post),
        }))
}
