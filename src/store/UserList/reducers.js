import * as actions from "./actions";

const userListReducerInitialState = [];

export const userListReducer = (
  state = userListReducerInitialState,
  action
) => {
  switch (action.type) {
    case actions.GET_USER_LIST_SUCCESS:
      return [...action.payload];
    case actions.GET_USER_LIST_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.message,
        errorDetail: action.payload.detail,
      };
    default:
      return state;
  }
};
