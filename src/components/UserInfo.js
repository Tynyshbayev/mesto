export class UserInfo {
    constructor (avatarSelector, profileNameSelector, aboutMeSelector ) {
        this._avatarProfile = avatarSelector
        console.log(this._avatarProfile)
        this._profileName = profileNameSelector;
        this._profileAboutMe = aboutMeSelector;
    }

    getUserInfo () {
        this._profileInfo = {};
        this._profileInfo.name = this._profileName.textContent;
        this._profileInfo.job = this._profileAboutMe.textContent;
        return this._profileInfo;
        
    }
    getUserId () {
        return this._currentUserId;
    }

    setUserInfo ({profilename, job}) {
        this._profileName.textContent = profilename;
        this._profileAboutMe.textContent = job;
    }
    
    setUserInfo (profilename, job, id) {
        this._profileName.textContent = profilename;
        this._profileAboutMe.textContent = job;
        this._currentUserId = id;
    }
}