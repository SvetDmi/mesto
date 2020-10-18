export default class Api {
    constructor ({ url, headers }) { 
        this._url = url
        this._headers = headers
      };

    _parsAnswer(res) {
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
        .then(this._parsAnswer)
    };

    // 2. Загрузка карточек с сервера
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers
        })
            .then(this._parsAnswer)  
    };


   getAllInfo() {   
        return Promise.all([this.getInitialCards(), this.getUserInfo()]) 
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
        .then(this._parsAnswer)  
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
        .then(this._parsAnswer)
   
    }

        // 7. Удаление карточки
        deleteCard(_id) {          
           return fetch(`${this._url}/cards/${_id}`, {
                method: "DELETE",
                headers: this._headers
              })
              .then(this._parsAnswer)
    }
 
    // 8. Постановка и снятие лайка
    doLike(_id) {        
        return fetch(`${this._url}/cards/likes/${_id}`, {
            method: "PUT",
            headers: this._headers
          })
          .then(this._parsAnswer)
    }

    deleteLike(_id) {
        return fetch(`${this._url}/cards/likes/${_id}`, {
            method: "DELETE",
            headers: this._headers
          })
          .then(this._parsAnswer); 

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
        .then(this._parsAnswer)
    }
}


