
const handleRemove = (state, action) => {
    const { result: removedId } = action.response;
    return state.filter(id => id !== removedId)
}

const commentIds = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_COMMENTS':
            return action.response.result

        case 'LOAD_COMMENT':
            return action.response.result

        case 'ADD_COMMENT':
            return [...state, action.response.result]

        case 'DELETE_COMMENT':
            return handleRemove(state, action)
        // case 'DELETE_POST':
        //     const RemovedIds =  state.filter( id => action.id === id.parentId)
        //     return RemovedIds.map(id => handleRemove(state, id)
        //

        default:
            return state;
    }
};

export default commentIds;

// 여기서 getIds 의 의미는
// action type에  따라 return 되는 Ids (state)
export const getIds = (state) => state.commentIds
