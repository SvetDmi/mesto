export default class UserInfo {
    constructor(user) {
        this._user = user;
    }

    getUserInfo() {
        this._userName = document.querySelector(this._user.nameSelector);
        this._userJob = document.querySelector(this._user.jobSelector);
        this._data = {};
        this._data.name = this._userName.textContent;
        this._data.job = this._userJob.textContent;
        return this._data;
    }

    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userJob.textContent = data.job;

    }
}
