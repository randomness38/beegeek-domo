import * as types from '../actions/actionTypes'

export const byCategoryId = (state = {}, action) => {
    switch (action.type) {
        case types.LOAD_CATEGORIES :
            return {
                ...state,
                ...action.response.entities.categories
            }
        default :
            return state
    }
}


export const categoryIds = (state = [], action) => {
    switch (action.type) {
        case types.LOAD_CATEGORIES :
            return [...action.response.result]
        default :
            return state
    }
}


