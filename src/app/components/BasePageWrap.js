'use server'

import { redirect } from "next/navigation";
import newSession from "../utils/auth";
import { host } from "./host";

export default async function PageWrap({children}) {

    newSession.isAuthProccess = false;
    console.log(newSession.isAuthProccess);

    return (
        <div className="py-5 tablet:py-0 flex flex-col gap-y-base tablet:gap-y-tab-base wrapper s-wrapper">{children}</div>
    )
}

export async function ApiWrap({children}){
    return (
        <div className="py-5 tablet:py-0 flex flex-col gap-y-base tablet:gap-y-tab-base wrapper s-wrapper">{children}</div>
    )
}