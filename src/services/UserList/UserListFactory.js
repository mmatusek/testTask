export class UserListFactory {
  constructor(apiUrl, httpService) {
    this.apiUrl = apiUrl;
    this.httpService = httpService;
  }

  getUserList = () =>
    this.httpService.get(`${this.apiUrl}/users?_limit=8`, false);
}
