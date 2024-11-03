'use client'

import Link from "next/link";
import Image from "next/image";
import { host } from "./host";

export default function Header() {
    

    return (
        <header className="fixed w-full py-2.5 bg-white shadow-down-shadow">
            <form className="flex gap-x-2.5 wrapper">
                <input type="text" name="search" id="searchform" placeholder="Поиск" className="w-full bg-grey rounded-xl px-3 h-6 border-grey active:border-grey focus:border-grey"></input>
                <button type="submit">
                    <Image alt="search" height={24} width={24} src={`http://${host}/Search.svg`}/>
                </button>
                <Link href={'/profile'}>
                    <Image alt="profile" height={24} width={24} src={`http://${host}/Profile.svg`}/>
                </Link>
            </form>
        </header>
    )
}