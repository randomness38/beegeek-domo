import axios from 'axios'
import * as types from './actionTypes'
import * as api from '../api'

export const doFetchComments = (parentId) => (dispatch) => {
    return api.fetchComments(parentId)
        .then(comments => dispatch({
            type: types.LOAD_COMMENTS,
            comments
        }))
}
export const doAddComment = (comment) => (dispatch) => {
    return api.addComment(comment)
        .then(comment => dispatch({
            type: types.ADD_COMMENT,
            comment
        }))
}


export const doFetchComment = (id) => (dispatch) => {
    return api.fetchComment(id)
        .then(comment => dispatch({
            type: types.LOAD_COMMENT,
            comment
        }))
}

export const doVoteComment = (id, option) => (dispatch) => {
    return api.voteComment(id, option)
        .then(comment => dispatch({
            type: types.VOTE_COMMENT,
            comment
        }))
}

export const doEditComment = (id, comment) => (dispatch) => {
    return api.editComment(id, comment)
        .then(comment => dispatch({
            type: types.EDIT_COMMENT,
            comment
        }))
}


export const doDeleteComment = (id) => (dispatch) => {
    return api.deleteComment(id)
        .then(comment => dispatch({
            type: types.DELETE_COMMENT,
            comment
        }))
}
