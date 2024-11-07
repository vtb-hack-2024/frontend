'use client'

import Link from "next/link";
import { BaseP } from "./Text";
import Image from "next/image";
import { host } from "./host";

export function NewLink({url, action, isLink=true, text}) {
    let className = "px-base tablet:px-tab-base py-[4.5px] bg-light-blue rounded-full";

    if (isLink) return <Link href={url} className={className}>{text}</Link>
    else return <button onClick={action} className={className}>{text}</button>
}

export function Edit({url}) {
    return (
        <Link className="flex gap-x-base tablet:gap-x-tab-base py-[5px] px-base tablet:px-tab-base bg-blue rounded-full tablet:rounded-base items-center shadow-drop" href={url}>
            <Image alt={'edit'} src={'Edit.svg'} width={24} height={24}/>
            <BaseP text={'Редактировать'} className="text-white"/>
        </Link>
    )
}

export function Exit() {
    function exit(e) {
        e.preventDefault();
        localStorage.clear();
        window.location.replace(`http://${host}/auth/login`);
    };

    return (
        <button className="py-[5px] px-base tablet:px-tab-base rounded-full tablet:rounded-base bg-white shadow-drop" onClick={(e) => exit(e)}>
            <BaseP text={'Выйти'} className="text-red"/>
        </button>
    )
}

export function SignupButton({isLogin}) {
    if (!isLogin) {
        return (
            <button type='submit' className="w-full shadow-drop py-base tablet:py-tab-base bg-light-blue rounded-little"><BaseP text={'Зарегистрироваться'} className="text-center"/></button>
        )
    }
    return (
        <Link href={'/auth/signup'} className="w-full shadow-drop py-base tablet:py-tab-base bg-light-blue rounded-little"><BaseP text={'Зарегистрироваться'} className="text-center"/></Link>
    )
}

export function LoginButton({isLogin}) {
    if (isLogin) {
        return (
            <button type='submit' className="w-full shadow-drop py-base tablet:py-tab-base bg-blue rounded-little"><BaseP text={'Войти'} className="text-white text-center"/></button>
        )
    }
    return (
        <Link href={'/auth/login'} className="w-full shadow-drop py-base tablet:py-tab-base bg-blue rounded-little"><BaseP text={'Войти'} className="text-white text-center"/></Link>
    )
}