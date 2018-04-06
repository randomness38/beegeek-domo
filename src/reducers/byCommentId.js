import * as comments from '../actions/comments'

const byCommentId = (state = {}, action) => {
    if (action.response) {
        return {
            ...state,
            ...action.response.entities.comments
        }
    }
    return state
};

const isEditing = (state = false, action) => {
  switch (action.type) {
    case 'EDIT_COMMENT_REQUEST':
      return true;
    case 'EDIT_COMMENT_SUCCESS':
    case 'EDIT_COMMENT_FAILURE':
      return false;
    default:
      return state;
  }
};


export default byCommentId
export const getComment = (state, id) => state[id];
