export const GET_USER_POST_LIST_SUCCESS = "GET_USER_POST_LIST_SUCCESS";
export const GET_USER_POST_LIST_FAILURE = "GET_USER_POST_LIST_FAILURE";

export const getUserPostListSuccess = (data) => ({
  type: GET_USER_POST_LIST_SUCCESS,
  payload: data,
});

export const getUserPostListFailure = (data) => ({
  type: GET_USER_POST_LIST_FAILURE,
  payload: data,
});
