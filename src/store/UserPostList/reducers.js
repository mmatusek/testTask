import * as actions from "./actions";

const userPostListReducerInitialState = [];

export const userPostListReducer = (
  state = userPostListReducerInitialState,
  action
) => {
  switch (action.type) {
    case actions.GET_USER_POST_LIST_SUCCESS:
      return action.payload;
    case actions.GET_USER_POST_LIST_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.message,
        errorDetail: action.payload.detail,
      };
    default:
      return state;
  }
};
