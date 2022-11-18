const moviesApiUtils = {
  serverUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
};

class Api {
  constructor(options) {
    this._url = options.serverUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getMoviesFromServer() {
    return fetch(`${this._url}`, {
      method: 'GET',
      headers: this.headers,
    })
      .then(this._checkResponse);
  }
}

export const moviesApi = new Api(moviesApiUtils);
