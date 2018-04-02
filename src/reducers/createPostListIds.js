import { combineReducers } from 'redux';

/**
 * filterName = 각 Ids reducer 이름 (Ids Reducer 생성할때 내가 때려넣음)
 * action.filter 어디서 오는가? A. params (endpoint url)
 * (1) Reducer update ) A.C fetchPosts(filter) ▸ response normalizr ▸ Root Reducer ▸ byId / IDs [filter] update
 * (2)  Updated State 가져오기 ) mapStateToProps ▸ getVisiblePosts( state, filter ) ▸ IDs[filter].map ▸ this.props.filtered_Posts

 */

const createPostListIds = (filterName) => {
    // const handleToggle = (state, action) => {
    //     const { result: toggledId, entities } = action.response;
    //     const { completed } = entities.todos[toggledId];
    //     const shouldRemove = (
    //         (completed && filter === 'active') ||
    //         (!completed && filter === 'completed')
    //     );
    //     return shouldRemove ?
    //         state.filter(id => id !== toggledId) :
    //         state;
    // };

    const handleCategoryMove = (state, action) => {
        const { result: movedId, entities } = action.response;
        const { category } = entities.posts[movedId];
        console.log(category, filterName)
        // state 에 movedId 가 있는지 탐색.
        // 있으면 filterName !== category 카테고리 바뀌었으면 필터
        // 다시 fetchPostsByCategory 하면 이제 거기들어가있음
        return state.indexOf(movedId) !== -1 && filterName !== category
            ? state.filter(id => id !== movedId)
            : state
    }

    const handleRemove = (state, action) => {
        const { result: removedId, entities } = action.response;
        const { category } = entities.posts[removedId];
        return filterName !== category
            ? state.filter(id => id !== removedId)
            : state
    }

    const ids = (state = [], action) => {
        switch (action.type) {

            case 'LOAD_ALL_POSTS':
                return filterName === 'all' ?
                    action.response.result :
                    state;
            case 'LOAD_POSTS_BY_CATEGORY':
                return filterName === action.filter ?
                    action.response.result :
                    state;
            case 'ADD_POST':
                const { result: addedId, entities } = action.response;
                const { category } = entities.posts[addedId];
                return (filterName !== 'removed' && filterName === category) ? [...state, action.response.result] : state

            // 여기가 미치겠는건데여
            // category 를 edit 해쓰믄 어케? 그리고 특정 Ids 만 update 하는거면 action.filter 받아야 함
            case 'EDIT_POST':
                // return action.response.result
                return handleCategoryMove(state, action)


                //Delete 이나 Vote 는
            case 'DELETE_POST':
                return handleRemove(state, action)
            // case 'VOTE_POST':
            //     return filterName === action.filter ?
            //         action.response.result :
            //         state;
            default:
                return state;
        }
    };

    // const isFetching = (state = false, action) => {
    //     if (filter !== action.filter) {
    //         return state;
    //     }
    //     switch (action.type) {
    //         case 'FETCH_TODOS_REQUEST':
    //             return true;
    //         case 'FETCH_TODOS_SUCCESS':
    //         case 'FETCH_TODOS_FAILURE':
    //             return false;
    //         default:
    //             return state;
    //     }
    // };
    //
    // const errorMessage = (state = null, action) => {
    //     if (filter !== action.filter) {
    //         return state;
    //     }
    //     switch (action.type) {
    //         case 'FETCH_TODOS_FAILURE':
    //             return action.message;
    //         case 'FETCH_TODOS_REQUEST':
    //         case 'FETCH_TODOS_SUCCESS':
    //             return null;
    //         default:
    //             return state;
    //     }
    // };

    return combineReducers({
        ids,
        // isFetching,
        // errorMessage,
    });
};

export default createPostListIds;

export const getIds = (state) => state.ids;
// export const getIsFetching = (state) => state.isFetching;
// export const getErrorMessage = (state) => state.errorMessage;
