import { userListService } from "../../services";
import * as actions from "./";

export const getUserListRequest = () => async (dispatch) => {
  try {
    const userList = await userListService.getUserList();
    dispatch(actions.getUserListSuccess(userList));
  } catch (error) {
    dispatch(actions.getUserListFailure(error));
  }
};
