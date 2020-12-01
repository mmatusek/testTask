import { userPostListService } from "../../services";
import * as actions from ".";

export const getUserPostListRequest = (userId) => async (dispatch) => {
  try {
    const postList = await userPostListService.getUserPostList(userId);
    dispatch(actions.getUserPostListSuccess(postList));
  } catch (error) {
    dispatch(actions.getUserPostListFailure(error));
  }
};
