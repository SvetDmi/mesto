export default class UserInfo {
    constructor(user) {
        this._user = user;
        this._userName = document.querySelector(this._user.nameSelector);
        this._userAbout = document.querySelector(this._user.aboutSelector);
        this._userAvatar = document.querySelector(this._user.avatarSelector);
    }

    getUserInfo() {
        const userData = {};
        userData.name = this._userName.textContent;
        userData.about = this._userAbout.textContent;
        userData.avatar = this._userAvatar.src;
        return userData;
    }

    setUserInfo(inputData) {
        this._userName.textContent = inputData.name;
        this._userAbout.textContent = inputData.about;        
    }

    setUserAvatar(inputData) {
    this._userAvatar.src = inputData.avatar;
    }
}


