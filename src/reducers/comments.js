import * as types from '../actions/actionTypes'

export default function comments (state = {}, action) {
    const { comments, comment } = action
    switch (action.type) {
        case types.LOAD_COMMENTS :
            return {
                ...state,
                ...comments
            }
        case types.LOAD_COMMENT :
            return {
                ...state,
                ...comment,
            }
        case types.ADD_COMMENT :
            return {
                ...state,
                ...comment,

            }
        case types.EDIT_COMMENT :
            return {
                ...state,
                ...comment,
            }
        case types.DELETE_COMMENT :
            return {
                ...state,
                ...comment,
            }
        case types.VOTE_COMMENT :
            return {
                ...state,
                ...comment,
            }
        default :
            return state
    }
}
