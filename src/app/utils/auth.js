import "server-only";
import { serverHost } from "../components/host";

class Session {
    constructor (livetime=null, accessToken=null, userId=null) {
        this.userId = userId;
        this.accessToken = accessToken;
        this.livetime = livetime;
        this.interval = null;
        this.isAuthProccess = false;
    }

    getAccess() {
        return this.accessToken;
    }

    getUserId() {
        return this.userId;
    }

    async getName() {
        try {
            let res = await fetch(`http://${serverHost}/getname?userId=${this.userId}`, {method: 'GET'});
            if (res.status == 200) return await res.json();
            else throw toString(res.status);
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    clearSession() {
        if (this.interval) clearInterval(this.interval);
        this.accessToken = null;
        this.userId = null;
        this.livetime = null;
        this.isAuthProccess = true;
    }

    async updateSession (accessToken, userId, livetime) {
        if (accessToken, userId, livetime) {
            this.accessToken = accessToken;
            this.userId = userId;
            this.livetime = livetime;
            // this.interval = setInterval(() => this.refreshToken(), livetime);
        } else throw 'Some error';        
    }

    async refreshToken(){
        try {
            let res = await fetch(`http://${serverHost}/refresh`, {method: 'GET'});
            if (res.status == 200) {
                let data = await res.json();
                this.accessToken = data.accessToken;
                this.livetime = data.accessToken;
                return {accessToken: this.accessToken, livetime: this.livetime};
            }
            else throw "Token wash't getting";
        } catch (e) {
            if (this.interval) clearInterval(this.interval);
            this.accessToken = null;
            this.livetime = null;
            this.userId = null;
            this.interval = null;
            console.log(e);
            // redirect(`http://${host}/auth/login`, 'replace');
            return null;
        }
    }

    static async setAccessToken() {
        try {
            let res = await fetch(`http://${serverHost}/refresh`, {method: 'GET'})
            if (res.status == 200) return await res.json();
            else throw toString(res.status);
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    static async setSession() {
        // let res = await this.setAccessToken();
        // let session 
        // if(res) {
        //     session = new Session(res.livetime, res.accessToken, res.userId);
        //     session.interval = setInterval(() => session.refreshToken(), session.livetime);
        // }
        // else session = new Session();
        let session = new Session();
        return session;
    }
}

const newSession = await Session.setSession();

export default newSession;
export {Session};

