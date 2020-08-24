export default class Api {
    constructor(token) {
        this._token = token;
        this._url = token.url;
        this._headers = token.headers;
    }

    _testRes(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers,
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
            })
            .then(res => {
                this._testRes(res)
            });
    }
}




//     addCard() {

//     }

//     deleteCard() {

//     }

//     getUserInfo() {

//     }

//     editUserInfo() {

//     }

//     editUserAvatar() {

//     }
//     doLike() {

//     }
//     deleteLike() {

//     }

// }

// const api = new Api(token) {

// 
