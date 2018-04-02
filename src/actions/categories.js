import { normalize } from 'normalizr'
import * as schema from './schema'
import * as types from './actionTypes'
import * as api from "../utils/api";

function prepareCategoryDataForNormalizer(rawData) {
    return rawData.map((e) => (
            {
                ...e, id: e.name
            }
        ))
}

export const doFetchCategories = () => (dispatch) => {
    return api.fetchCategories()
        .then(categories => prepareCategoryDataForNormalizer(categories))
        .then((categories) => {
            // console.log('normalized response', normalize(categories, schema.arrayOfCategories))
        dispatch({
            type: types.LOAD_CATEGORIES,
            response: normalize(categories, schema.arrayOfCategories),
        });
    });
}
//
// export const doFetchAllPosts = () => (dispatch) => {
//     return api.fetchAllPosts()
//         .then((posts) => {
//             console.log('normalized response', normalize(posts, schema.arrayOfPosts))
//             dispatch({
//                 type: types.LOAD_ALL_POSTS,
//                 response : normalize(posts, schema.arrayOfPosts),
//             })})
// }

