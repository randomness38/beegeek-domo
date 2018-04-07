import axios from 'axios'
import { normalize } from 'normalizr'
import * as schema from './schema'
import * as types from './actionTypes'
import * as api from '../utils/api'

export const doFetchComments = (parentId) => (dispatch) => {
    return api.fetchComments(parentId)
        .then(comments => {
            // console.log('normalized response', normalize(comments, schema.arrayOfComments))
            dispatch({
                type: types.LOAD_COMMENTS,
                response: normalize(comments, schema.arrayOfComments)
            })
        })
}
export const doAddComment = (comment) => (dispatch) => {
    return api.addComment(comment)
        .then(comment => dispatch({
            type: types.ADD_COMMENT,
            response: normalize(comment, schema.comment)
        }))
}


export const doFetchComment = (id) => (dispatch) => {
    return api.fetchComment(id)
        .then(comment => dispatch({
            type: types.LOAD_COMMENT,
            response: normalize(comment, schema.comment)
        }))
}

export const doVoteComment = (id, option) => (dispatch) => {
    return api.voteComment(id, option)
        .then(comment => dispatch({
            type: types.VOTE_COMMENT,
            response: normalize(comment, schema.comment)
        }))
}

export const doEditComment = (id, comment) => (dispatch) => {
    return api.editComment(id, comment)
        .then(comment => dispatch({
            type: types.EDIT_COMMENT,
            response: normalize(comment, schema.comment)
        }))
}


export const doDeleteComment = (id) => (dispatch) => {
    return api.deleteComment(id)
        .then(comment => dispatch({
            type: types.DELETE_COMMENT,
            response: normalize(comment, schema.comment)
        }))
}


export const doOpenEditing = (id) => (dispatch) => {
  return dispatch({
      type: types.OPEN_EDITING,
      id,
  })

};

export const doCloseEditing = (id) => (dispatch) => {
  return dispatch({
    type: types.CLOSE_EDITING,
    id,
  })

};
