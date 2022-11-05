const mainApiUtils = {
  serverUrl: "https://api.diploma43.nomoredomains.icu",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
  credentials: "include",
};

class Api {
  constructor(options) {
    this._url = options.serverUrl;
    this._headers = options.headers;
    this._credentials = options.credentials;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  register(name, password, email) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, password, email })
    })
      .then(this._checkResponse);
  }

  login(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({ password, email })
    })
      .then(this._checkResponse);
  }

  logout() {
    return fetch(`${this._url}/signout`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: "include",
    })
      .then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: this._credentials,
    })
      .then(this._checkResponse);
  }

  editUserInfo(name, email) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({ name, email })
    })
      .then(this._checkResponse);
  }

  getMoviesFromSaved() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: this._credentials,
    })
      .then(this._checkResponse);
  }

  addMovieToSaved(movie) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify(movie)
    })
      .then(this._checkResponse);
  }

  deleteMovieFromSaved(_id) {
    return fetch(`${this._url}/movies/${_id}`, {
      method: 'DELETE',
      credentials: this._credentials,
      headers: this._headers,
    })
      .then(this._checkResponse);
  }
}

export const mainApi = new Api(mainApiUtils);
