'use server';

import { redirect } from "next/navigation";
import newSession, { Session } from "../utils/auth";
import { host } from "./host";
import { headers } from "next/headers";

export default async function AuthWrap({children}) {
    // let currentUrl = await headers();
    // console.log(currentUrl);
    // let redir = !currentUrl.get('referer').split('/').includes('auth');
    // console.log(redir)
    console.log(newSession.isAuthProccess);
    if (!newSession.isAuthProccess) {
        console.log('here');
        let access = await Session.setAccessToken();
        if (access) {
            newSession.interval = setInterval(async () => {
                let newToken = await newSession.refreshToken();
                if (newToken) return;
                else {
                    newSession.clearSession();
                    redirect(`http://${host}/auth/login`, 'replace');
                }
            }, access.livetime);
        } else {
            newSession.clearSession();
            redirect(`http://${host}/auth/login`, 'replace');
        }
    }
    return <>{children}</>
}