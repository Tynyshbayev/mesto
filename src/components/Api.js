export class Api {
    constructor({token, url}) {
        this._token = token;
        this._url = url;
    }

    _getResponse (res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject("Произошла ошибка");
    }

    getUserInformation () {
            return fetch(`${this._url}/users/me`, {
                headers: {
                    authorization: this._token,
            }
        }).then(this._getResponse)
    }

    getCards () {
        return fetch(`${this._url}/cards`, {
            headers: {
                authorization: this._token,
        }
        }).then(this._getResponse)
    }

    editUserInfo (name, about) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                about
            })
        }).then(this._getResponse)
    }

    addNewCard ({name, link}) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                link
            })
        }).then(this._getResponse)
    }

    removeCard (cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
        }
        }).then(this._getResponse)
    }

    likeCard(cardId)  {
        return fetch(`${this._url}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: {
                authorization: this._token,
        }
        }).then(this._getResponse)
    }

    dislikeCard(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
        }
        }).then(this._getResponse)
    }

    editUserAvatar (avatar) {
        return fetch(`${this._url}/users/me/avatar `, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar
            })
        }).then(this._getResponse)
    }
}