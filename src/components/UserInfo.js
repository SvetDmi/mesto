export default class UserInfo {
    constructor(user) {
        this._user = user;
    }

    getUserInfo() {
        this._userName = document.querySelector(this._user.titleSelector);
        this._userInfo = document.querySelector(this._user.infoSelector);
        this._userArr = {};
        this._userArr.name = this._userName.textContent;
        this._userArr.info = this._userInfo.textContent;
        return this._userArr;
    }

    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userInfo.textContent = data.job;

    }
}
