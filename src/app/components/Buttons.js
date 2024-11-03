'use client'

import Link from "next/link";
import { LittleP } from "./Text";
import Image from "next/image";

export function NewLink({url, action, isLink=true, text}) {
    let className = "px-2.5 py-[4.5px] bg-light-blue rounded-full";

    if (isLink) return <Link href={url} className={className}>{text}</Link>
    else return <button onClick={action} className={className}>{text}</button>
}

export function Edit({url}) {
    return (
        <Link className="flex gap-x-2.5 py-[5px] px-2.5 bg-blue rounded-full items-center shadow-drop" href={url}>
            <Image alt={'edit'} src={'Edit.svg'} width={14} height={14}/>
            <LittleP text={'Редактировать'} className="text-white"/>
        </Link>
    )
}

export function Exit() {
    function exit() {return};

    return (
        <button className="py-[5px] px-2.5 rounded-full bg-white shadow-drop" onClick={exit}>
            <LittleP text={'Выйти'} className="text-red"/>
        </button>
    )
}

export function SignupButton() {
    if (window.location.href.split('/').includes('signup')) {
        return (
            <button type='submit' className="w-full shadow-drop py-2.5 bg-light-blue rounded-little"><LittleP text={'Зарегистрироваться'} className="text-center"/></button>
        )
    }
    return (
        <Link href={'/auth/signup'} className="w-full shadow-drop py-2.5 bg-light-blue rounded-little"><LittleP text={'Зарегистрироваться'} className="text-center"/></Link>
    )
}

export function LoginButton() {
    if (window.location.href.split('/').includes('login')) {
        return (
            <button type='submit' className="w-full shadow-drop py-2.5 bg-blue rounded-little"><LittleP text={'Войти'} className="text-white text-center"/></button>
        )
    }
    return (
        <Link href={'/auth/login'} className="w-full shadow-drop py-2.5 bg-blue rounded-little"><LittleP text={'Войти'} className="text-white text-center"/></Link>
    )
}