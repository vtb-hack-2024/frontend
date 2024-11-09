'use client'

import Link from "next/link";
import { host, serverHost } from "./host";
import { useEffect, useState } from "react";
import { SpanGrad, BaseP } from "./Text";
import { NamePlug } from "./plugs";
import { Exit } from "./Buttons";

function Name ({name}) {
    return <>{name ? <SpanGrad text={name} className="font-bold text-[20px] desktop:text-[26px]"/> : <NamePlug />}</>
}

export default function Header({name}) {
    // const [name, setName] = useState(userName);
    let visible = true;
    let isMobile = true;

    if (window.innerWidth > 640) isMobile = false;

    const href = document.location.href.split('/');

    if (href.includes('auth')) visible = false;

    // useEffect(() => {
    //     async function getData () {
    //         fetch(`http://${serverHost}/getname?userId=${userId}`, {method: 'GET'})
    //         .then(res => res.json())
    //         .catch(err => console.log(err))
    //         .then(data => {
    //             console.log(data);
    //             if (data != name) setName(data);
    //         })
    //     }

    //     getData();
    // })

    return (
        <header className={`${visible ? 'fixed' : 'hidden'} w-full h-auto tablet:h-[70px] py-base tablet:py-5 bg-white tablet:bg-transparent shadow-down-shadow tablet:shadow-none z-50`}>
            <form className="flex tablet:grid header-grid gap-base tablet:gap-5 wrapper top">
                {
                    !isMobile
                    ? 
                    <div className="flex gap-x-base items-top">
                        <Link href={'/profile'} className="bg-center bg-no-repeat bg-cover w-9 h-9" style={{backgroundImage: `url(http://${host}/Profile-tab.svg)`}} />
                        <Name name={name} />
                    </div>
                    : 
                    <Link href={'/profile'}>
                        <div className="bg-center bg-no-repeat bg-contain w-6 h-6" style={{backgroundImage: `url(http://${host}/Profile.svg)`}}></div>
                    </Link>
                }
                {
                    !isMobile
                    ? 
                    <div className="flex gap-x-base w-full items-center">
                        <input type="text" name="search" id="searchform" placeholder="Поиск" className="w-full  bg-grey rounded-base px-3 h-6 tablet:p-[15px] tablet:h-[50px] border-grey active:border-grey focus:border-grey placeholder:text-base tablet:placeholder:text-base-t desktop:placeholder:text-base-d tablet:shadow-inner"></input>
                        <button type="submit" className="bg-center bg-no-repeat bg-cover rounded-base w-[50px] h-[50px] shadow-drop" style={{backgroundImage: `url(http://${host}/Search-tab.svg)`}}>
                        </button>
                    </div>
                    : 
                    <>
                        <input type="text" name="search" id="searchform" placeholder="Поиск" className="w-full  bg-grey rounded-full px-3 h-6 border-grey active:border-grey focus:border-grey"></input>
                        <button type="submit">
                            <div className="bg-center bg-no-repeat bg-contain w-6 h-6" style={{backgroundImage: `url(http://${host}/Search.svg)`}}></div>
                        </button>
                    </>
                }
                {
                    !isMobile 
                    &&
                    <>
                        <div className="flex justify-end h-full w-full items-center">
                            <Exit />
                        </div>
                        <nav className="absolute top-[90px] flex flex-col justify-normal gap-y-5 footer-nav-tab">
                            <Link href={'/'} className={`rounded-base w-max text-dark text-base tablet:text-base-t desktop:text-base-d p-4 bg-white active:bg-grey hover:bg-grey transition-all duration-300 shadow-drop active:shadow-inner hover:shadow-inner`} >
                                <span>Главная</span>
                            </Link>
                            <Link href={'/profile'} className={`rounded-base w-max text-dark text-base tablet:text-base-t desktop:text-base-d p-4 w-fill bg-white active:bg-grey hover:bg-grey transition-all duration-300 shadow-drop active:shadow-inner hover:shadow-inner`} >
                                <span>Личный кабинет</span>
                            </Link>
                        </nav>
                    </>
                }
            </form>
        </header>
    )
}