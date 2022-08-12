class Api {
  private _baseUrl: string;
  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  login(username: string, password: string) {
    return this._makeRequest(this._baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
  }

  _makeRequest(url: string, props: object) {
    return fetch(url, props).then((response) =>
      response.ok ? response.json() : Promise.reject("Request failed")
    );
  }
}

export const api = new Api("http://localhost:3000");
