'use server';

import newSession from "../utils/auth";

export default async function AuthLayout({children}) {
    newSession.clearSession();
    return (
        <div className="wrapper pt-[200px] tablet:pt-[150px] desktop:pt-[100px] w-full s-wrapper">
            {children}
        </div>
    )
}