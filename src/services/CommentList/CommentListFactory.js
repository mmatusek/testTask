export class CommentListFactory {
  constructor(apiUrl, httpService) {
    this.apiUrl = apiUrl;
    this.httpService = httpService;
  }

  getComments = (postId) =>
    this.httpService.get(`${this.apiUrl}/comments?postId=${postId}`, false);

  addNewPost = (email) =>
    this.httpService.post(
      `${this.apiUrl}/users/recover/reset-password-request/`,
      email,
      false
    );
}
