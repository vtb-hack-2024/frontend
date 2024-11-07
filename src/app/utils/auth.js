import "server-only";
import { host, serverHost } from "../components/host";
import { redirect } from "next/navigation";

class Session {
    constructor () {
        this.userId = null;
        this.accessToken = null;
        this.livetime = null;
        this.interval = null;
    }

    getAccess() {
        return this.accessToken;
    }

    getUserId() {
        return this.userId;
    }

    clearSession() {
        if (this.interval) clearInterval(this.interval);
        this.accessToken = null;
        this.userId = null;
        this.livetime = null;
    }

    async updateSession (accessToken, userId, livetime) {
        if (accessToken, userId, livetime) {
            this.accessToken = accessToken;
            this.userId = userId;
            this.livetime = livetime;
            let interval = setInterval(() => this.refreshToken(interval), livetime);
            this.interval = interval;
        } else throw 'Some error';        
    }

    async refreshToken(interval){
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
            if (interval) clearInterval(interval);
            this.accessToken = null;
            this.livetime = null;
            this.userId = null;
            this.interval = null;
            console.log(e);
            redirect(`http://${host}/auth/login`, 'replace');
        }
    }

    static async setSession() {
        const session = new Session();
        await session.refreshToken();
        let interval = setInterval(() => session.refreshToken(interval), session.livetime);
        session.interval = interval;
        return session;
    }
}

const newSession = await Session.setSession();

export default newSession;

