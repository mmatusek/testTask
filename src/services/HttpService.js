export class HttpServices {
  get(path) {
    return this.makeRequest("GET", path, null);
  }

  post(path, body) {
    return this.makeRequest("POST", path, body);
  }

  delete(path) {
    return this.makeRequest("DELETE", path, null);
  }

  patch(path, body) {
    return this.makeRequest("PATCH", path, body);
  }

  makeRequest(method, path, data) {
    const body = JSON.stringify(data);
    const headers = {
      "Content-Type": "application/json",
    };

    const handleError = async (res) => {
      const errorPayload = await res.json();
      return {
        status: res.status,
        ...errorPayload,
      };
    };

    const options = data ? { method, headers, body } : { method, headers };
    return fetch(path, options).then((res) =>
      res.ok
        ? res.status === 204
          ? res
          : res.json()
        : handleError(res).then((error) => Promise.reject(error))
    );
  }
}
