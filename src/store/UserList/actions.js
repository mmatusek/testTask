export const GET_USER_LIST_SUCCESS = "GET_USER_LIST_SUCCESS";
export const GET_USER_LIST_FAILURE = "GET_USER_LIST_FAILURE";

export const getUserListSuccess = (data) => ({
  type: GET_USER_LIST_SUCCESS,
  payload: data,
});

export const getUserListFailure = (data) => ({
  type: GET_USER_LIST_FAILURE,
  payload: data,
});
