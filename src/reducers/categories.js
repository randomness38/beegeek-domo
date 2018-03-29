import * as types from '../actions/actionTypes'

export default function categories (state = [], action) {
    const { categories } = action
    switch (action.type) {
        case types.LOAD_CATEGORIES :
            return [
                ...state,
                ...categories
            ]
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
        default :
            return state
    }
}


