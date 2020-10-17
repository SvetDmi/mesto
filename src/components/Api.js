export default class Api {
    constructor ({ url, headers }) { 
        this._url = url
        this._headers = headers
      };

    _testRes(res) {
        if (res.ok) {
            return res.json();            
        }
        return Promise.reject(`Ошибка: ${res.status}`);        
    }

   // 1. Загрузка информации о пользователе с сервера
   getUserInfo() {
        return fetch (`${this._url}/users/me`, {
            headers: this._headers
        })
        .then(this._testRes)
    };

    // 2. Загрузка карточек с сервера
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers
        })
            .then(this._testRes)  
    }        
  

    // 3. Редактирование профиля
    editUserInfo(inputData) {
        return fetch (`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify ({
                name: inputData.name,
                about: inputData.about
        })
        })
        .then(this._testRes)  
    }
  
    // 4. Добавление новой карточки
    addCard(data) {        
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })                   
        })
        .then(this._testRes)
   
    }

        // 7. Удаление карточки
        deleteCard(_id) {          
           return fetch(`${this._url}/cards/${_id}`, {
                method: "DELETE",
                headers: this._headers
              })
              .then(this._testRes)
    }
 
    // 8. Постановка и снятие лайка
    doLike(_id) {        
        return fetch(`${this._url}/cards/likes/${_id}`, {
            method: "PUT",
            headers: this._headers
          })
          .then(this._testRes)
    }

    deleteLike(_id) {
        return fetch(`${this._url}/cards/likes/${_id}`, {
            method: "DELETE",
            headers: this._headers
          })
          .then(this._testRes); 

    }

    // 9. Обновление аватара пользователя  
    editAvatar(inputData) {        
        return fetch (`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: inputData.link
              })
        })
        .then(this._testRes)
    }
}

 



















//     getUserInfo() {

//     }

//     editUserInfo() {

//     }

//     editUserAvatar() {

//     }
//    

// }

// const api = new Api(token) {

// 
