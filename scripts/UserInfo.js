export class UserInfo {
    constructor (profileNameSelector, aboutMeSelector ) {
        this._profileName = profileNameSelector;
        this._profileAboutMe = aboutMeSelector;
    }

    getUserInfo () {
        this._profileInfo = {};
        this._profileInfo.name = this._profileName.textContent;
        this._profileInfo.job = this._profileAboutMe.textContent;
        return this._profileInfo;
    }

    setUserInfo ({nameprofile, text}) {
        this._profileName.textContent = nameprofile;
        this._profileAboutMe.textContent = text;
    }
}