
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
// action.type 에  따라 return 되는 Ids (state) 를 가리킴
// action creator 가 무엇이냐에 따라 getIds 는 자동으로 변경 됨
export const getIds = (state) => state.commentIds
