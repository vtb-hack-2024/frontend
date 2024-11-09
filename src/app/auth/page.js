'use server';

import { redirect } from "next/navigation";
import newSession, {Session} from "../utils/auth";
import { host } from "../components/host";
import Link from "next/link";

export default async function Auth() {
    // let getParams = await params;
    // const userId = getParams['auth'];
    // console.log(userId);
    // const {accessToken, livetime} = await newSession.refreshToken();
    // newSession.updateSession(accessToken, userId, livetime).then(redirect(`http://${host}/`, 'replace')).catch(redirect(`http://${host}/auth/login`, 'replace'))';
    newSession.isAuthProccess = true;
    let access = await Session.setAccessToken();
    // redirect(`http://${host}/auth/login?userId=${newSession.getUserId()}`, 'replace');
    redirect(`http://${host}/auth/login?userId=${1}`, 'replace');
    if (access) redirect(`http://${host}/auth/login?userId${newSession.getUserId()}`, 'replace');
    else redirect(`http://${host}/auth/login`, 'replace');
    // redirect(`http://${host}/`, 'replace');
    return <Link href={`http://${host}/`} id="redirect"></Link>
}