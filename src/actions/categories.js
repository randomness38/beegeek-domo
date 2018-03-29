import * as types from './actionTypes'
import * as api from "../api";

export const doFetchCategories = () => (dispatch) => {
    return api.fetchCategories()
        .then((categories) => dispatch({
            type: types.LOAD_CATEGORIES,
            categories,
}))}
