'use server';

import { redirect } from "next/dist/server/api-utils";
import newSession from "../utils/auth";
import { host } from "../components/host";

export default async function Auth({params}) {
    let getParams = await params;
    const userId = getParams['auth'];
    console.log(userId);
    const {accessToken, livetime} = await newSession.refreshToken();
    newSession.updateSession(accessToken, userId, livetime).then(redirect(`http://${host}/`, 'replace')).catch(redirect(`http://${host}/auth/login`, 'replace'))
    return <></>
}