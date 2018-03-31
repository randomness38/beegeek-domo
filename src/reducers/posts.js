// import * as types from '../actions/actionTypes'
//
// export default function posts (state = {}, action) {
//     const { posts, post } = action
//     switch (action.type) {
//         case types.LOAD_ALL_POSTS :
//             return {
//                 ...state,
//                 ...posts
//             //  action 없이 posts 이렇게하면 에러남. 누가 알려준거니?? **
//             }
//         case types.LOAD_POSTS_BY_CATEGORIES :
//             return {
//                 ...state,
//                 ...posts,
//             }
//         //    이건 셀렉터가 해야 하는 것 같은데 이걸 어뜨케해애?
//         case types.LOAD_POST :
//             return {
//                 ...state,
//                 ...post,
//
//             }
//         case types.ADD_POST :
//             return {
//                 ...state,
//                 ...post,
//
//             }
//         case types.EDIT_POST :
//             return {
//                 ...state,
//                 ...post,
//             }
//         case types.DELETE_POST :
//             return {
//                 ...state,
//                 ...post,
//             }
//         case types.VOTE_POST :
//             return {
//                 ...state,
//                 ...post,
//             }
//         default :
//             return state
//     }
// }
//
//
// //     case actions.CLEAR_DECKS :
// //         return {
// //             state : undefined
// //         }
// //     case actions.LOAD_DECK :
// //         return {
// //             ...state,
// //             ...action.deck
// //         }
// //     case actions.REMOVE_DECK :
// //         return {
// //             ...state,
// //             [action.deckId] : undefined
// //         }
// //     case actions.LOAD_CARD :
// //         return {
// //             ...state,
// //             [action.deckId] : {
// //                 ...state[action.deckId] ,
// //                 questions : [
// //                     ...state[action.deckId].questions,
// //                     action.card
// //                 ]
// //             }
// //         }


import * as types from '../actions/actionTypes'

export default function posts (state = {}, action) {
    const { posts, post } = action
    switch (action.type) {
        case types.LOAD_ALL_POSTS :
            return {
                ...state,
                ...posts
                //  action 없이 posts 이렇게하면 에러남. 누가 알려준거니?? **
            }
        case types.LOAD_POSTS_BY_CATEGORIES :
            return {
                ...state,
                ...posts,
            }
        //    이건 셀렉터가 해야 하는 것 같은데 이걸 어뜨케해애?
        case types.LOAD_POST :
            return {
                ...state,
                ...post,

            }
        case types.ADD_POST :
            return {
                ...state,
                ...post,

            }
        case types.EDIT_POST :
            return {
                ...state,
                ...post,
            }
        case types.DELETE_POST :
            return {
                ...state,
                ...post,
            }
        case types.VOTE_POST :
            return {
                ...state,
                ...post,
            }
        default :
            return state
    }
}


//     case actions.CLEAR_DECKS :
//         return {
//             state : undefined
//         }
//     case actions.LOAD_DECK :
//         return {
//             ...state,
//             ...action.deck
//         }
//     case actions.REMOVE_DECK :
//         return {
//             ...state,
//             [action.deckId] : undefined
//         }
//     case actions.LOAD_CARD :
//         return {
//             ...state,
//             [action.deckId] : {
//                 ...state[action.deckId] ,
//                 questions : [
//                     ...state[action.deckId].questions,
//                     action.card
//                 ]
//             }
//         }
