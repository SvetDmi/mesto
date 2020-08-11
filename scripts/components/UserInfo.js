export default class UserInfo {
    constructor(user) {
        this._user = user;
    }

    getUserInfo() {
        this._userName = document.querySelector(this._user.nameSelector);
        this._userInfo = document.querySelector(this._user.infoSelector);
        this._userArr = {};
        this._userArr.name = this._userName.textContent;
        this._userArr.info = this._userInfo.textContent;
        return this._userArr;
    }

    putUserInfo(name, info) {
        name.value = this._userArr.name;
        info.value = this._userArr.info;
    }

    setUserInfo(name, info) {
        this._userName.textContent = name.value;
        this._userInfo.textContent = info.value;
    }
}