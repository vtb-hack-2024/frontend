'use client'

import Link from "next/link";
import Image from "next/image";
import { host } from "./host";

export default function Footer() {
    let visible = true;
    return (
        <footer className={`${visible ? 'fixed' : 'hidden'} bottom-0 w-full py-2.5 bg-white shadow-up-shadow`}>
            <nav className="flex wrapper justify-around">
                <Link href={'/'}>
                   <Image alt="main page" src={`http://${host}/MainPage.svg`} height={24} width={24}/>
                </Link>
                <Link href={'/profile'}>
                    <Image alt="profile page" src={`http://${host}/ProfilePage.svg`} height={24} width={24}/>
                </Link>
            </nav>
        </footer>
    )
}