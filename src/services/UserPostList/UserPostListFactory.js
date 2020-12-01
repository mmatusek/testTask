export class UserPostListFactory {
  constructor(apiUrl, httpService) {
    this.apiUrl = apiUrl;
    this.httpService = httpService;
  }

  getUserPostList = (userId) =>
    this.httpService.get(`${this.apiUrl}/posts?userId=${userId}`, false);

  addNewPost = (value) =>
    this.httpService.post(`${this.apiUrl}/posts`, value, false);

  deletePost = (postId) =>
    this.httpService.delete(`${this.apiUrl}/posts/${postId}`, false);
}
