const byPostId = (state = {}, action) => {
    // const { response } = action
    if (action.response) {
        // action response : api + actionCreator 가 return 하는 res.data
        // Action Type 마다 다른 Action Creator 가 호출되고 반환하는 res.data 도 다르지!
        // 근데 그럼 매번 byPostId 에 업데이트 되는 애들이 다를텐데 정말 이렇게 해도 날라가지 않나?

        // listByFilter 는 Ids 만 갖고 있는데
        // action type 에 따라 다른 action.response 를 받고 커스텀 된 Ids 를 return 함
        return {
            ...state,
            ...action.response.entities.posts
        }
    }
    return state
}

export default byPostId
export const getPost = (state, id) => state[id];
