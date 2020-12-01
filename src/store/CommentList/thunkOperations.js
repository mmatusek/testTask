import { commentListService } from "../../services";
import * as actions from ".";

export const getCommentsListRequest = (postId) => async (dispatch) => {
  try {
    const comments = await commentListService.getComments(postId);
    dispatch(actions.getCommentsSuccess(comments));
  } catch (error) {
    dispatch(actions.getCommentsFailure(error));
  }
};
