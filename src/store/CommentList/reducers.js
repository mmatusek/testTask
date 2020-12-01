import * as actions from "./actions";

const postCommentsListReducerInitialState = [];

export const commentListReducer = (
  state = postCommentsListReducerInitialState,
  action
) => {
  switch (action.type) {
    case actions.GET_COMMENTS_SUCCESS:
      return action.payload;
    case actions.GET_COMMENTS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.message,
        errorDetail: action.payload.detail,
      };
    default:
      return state;
  }
};
