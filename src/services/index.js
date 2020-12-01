import { HttpServices } from "./HttpService";
import { UserListFactory } from "./UserList";
import { UserPostListFactory } from "./UserPostList";
import { CommentListFactory } from "./CommentList";
import { apiUrl } from "../constant";

export const httpService = new HttpServices();
export const userListService = new UserListFactory(apiUrl, httpService);
export const userPostListService = new UserPostListFactory(apiUrl, httpService);
export const commentListService = new CommentListFactory(apiUrl, httpService);
