'use client'

import Link from "next/link";
import Image from "next/image";
import { host } from "./host";

export default function Footer() {
    let visible = true;
    let isMobile = true;

    if (window.innerWidth > 640) isMobile = false;

    if (document.location.href.split('/').includes('auth')) visible = false;

    if (isMobile) {
        return (
            <footer className={`${visible ? 'fixed' : 'hidden'} bottom-0 tablet:top-[76px] w-full py-2.5 bg-white shadow-up-shadow z-50`}>
            <nav className="flex flex-row tablet:flex-col wrapper justify-around tablet:justify-normal tablet:gap-y-5">
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

    return (
        <></>
    )
}