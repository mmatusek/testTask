import { combineReducers } from "redux";

import { userListReducer } from "./UserList";
import { userPostListReducer } from "./UserPostList";
import { commentListReducer } from "./CommentList";

export const rootReducer = combineReducers({
  users: userListReducer,
  posts: userPostListReducer,
  comments: commentListReducer,
});
