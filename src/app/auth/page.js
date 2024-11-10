'use server';

import { redirect } from "next/navigation";
import newSession, {Session} from "../utils/auth";
import { host, serverHost } from "../components/host";

export default async function Auth() {

    newSession.isAuthProccess = false;
    try {
        let res = await fetch(`http://${serverHost}/getuserid`);
        if (res.status == 200) newSession.userId = res.json();
        else throw toString(res.status);
    } catch (e) {
        console.log(e);
    }
    let access = await Session.setAccessToken();
    if (access) redirect(`http://${host}/auth/login?userId=${newSession.getUserId()}`, 'replace');
    else redirect(`http://${host}/auth/login`, 'replace');
}