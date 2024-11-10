'use server'

import { Edit, Exit } from "../components/Buttons";
import { BaseP, H3, LittleP, SpanGrad } from "../components/Text";
import { GetAchivements } from "../components/getters"
import Graphic from "../components/graphic";
import PageWrap from "../components/BasePageWrap";
import { serverHost } from "../components/host";
import newSession from "../utils/auth";
// import { useEffect, useState } from "react";

export default async function Profile() {
    // const [data, setData] = useState({url: 'DefProfile.png', user: false})
    let data = {url: 'DefProfile.png', user: false};
    let userId = newSession.getUserId();
    // useEffect(() => {
    //     async function getData() {
    //         fetch(`http://${serverHost}/getbaseinfo?${localStorage.getItem('userId')}`, {method: 'GET'})
    //         .then(res => res.json())
    //         .catch(err => console.log(err))
    //         .then(data => {
    //             let {userImgUrl, ...newUser} = data;
    //             if (userImgUrl != data.url && userImgUrl) setData({url: userImgUrl, user: data.user});
    //             if (newUser != data.user && newUser) setData({url: data.url, user: newUser});
    //         })
    //     }

    //     getData();
    // })
    try {
        let res = await fetch(`http://${serverHost}/getbaseinfo?userId=${userId}&access=${newSession.getAccess()}`, {method: 'GET'});
        if (res.status == 200) {
            let {userImgUrl, ...newUser} = await res.json();
            if (userImgUrl != data.url && userImgUrl) data.url = userImgUrl;
            if (newUser != data.user && newUser) data.user = newUser;
        }
        else throw "Value hasn't got";
    } catch (e) {
        console.log(e);
    }

    return (
        <PageWrap>
            <div className="flex gap-x-base tablet:gap-x-tab-base w-full p-2.5 justify-between">
                <div className={`rounded-full profileimg bg-cover bg-no-repeat bg-center shadow-drop`} style={{backgroundImage: `url(${data.url})`}}></div>
                <ProfileInfo user={data.user}/>
            </div>
            <Achives />
            <NeuroMean userId={userId}/>
            <p className="text-dark text-base tablet:text-base-t desktop:text-base-d">Если бы вы не получали штрафы, то могли бы купить немало <SpanGrad text={'крипты'} className="font-bold text-subtitle"/></p>
            <CryptoData userId={userId}/>
        </PageWrap>
    )
}

function ProfileInfo({user}) {
    if (!user) user = {id: 'ID пользователя', name: 'Имя', lastname: 'Фамилия', surname: 'Отчество'};
    // let user = {id: 'ID пользователя', name: 'Имя', lastname: 'Фамилия', surname: 'Отчество'}

    return (
        <div className={`h-[144px] flex flex-col justify-between items-end`}>
            <H3>{`${user.name} ${user.lastname}${user.surname != '' ? user.surname : ''}`}</H3>
            <BaseP text={user.id}/>
            <Edit url={'!#'}/>
            <Exit />
        </div>
    )
}

function Achives() {
    return (
        <div className="flex flex-col gap-y-base tablet:gap-y-tab-base rounded-base p-base tablet:p-tab-base bg-white">
            <H3>Мои <SpanGrad text={'достижения'} className="font-bold"/></H3>
            <ul className="flex w-full overflow-x-scroll gap-x-base tablet:gap-x-tab-base">
                <GetAchivements size={44}/>
            </ul>
        </div>
    )
}

function NeuroMean({userId}) {
    return (
        <div className={`flex flex-col gap-y-base tablet:gap-y-tab-base`}>
            <H3>Как тебя видит нейросеть</H3>
            <NeouroPost userId={userId} neuroName={'GPT'}/>
            <NeouroPost userId={userId} neuroName={'Сбер'}/>
        </div>
    )
}

async function NeouroPost({neuroName}) {
    let date = '01.01.2024';
    let urlImg = `${neuroName}.jpg`;

    try {
        let res = await fetch(`http://${serverHost}/getneuromean?userId=${userId}&access=${newSession.getAccess()}&nameNeuro=${neuroName}`);
        if (res.status == 200) {
            let data = await res.json();
            date = data.date;
            urlImg = data.urlImg;
        }
        else throw "Value hasn't got"; 
    } catch (e) {
        console.log(e);
    }

    return (
        <div className="rounded-base overflow-hidden bg-white shadow-drop">
            <div className="flex flex-col gap-y-base p-base tablet:p-tab-base tablet:gap-y-tab-base">
                <H3>{neuroName}</H3>
                <LittleP text={date}/>
            </div>
            <div className="bg-cover bg-no-repeat bg-center w-full h-[266px]" style={{backgroundImage: `url('/${urlImg}')`}}></div>
        </div>
    )
}

async function CryptoData({userId}) {
    let data = [];
    try {
        let res = await fetch(`http://${serverHost}/getcryptodata?userId=${userId}&access=${newSession.getAccess()}`);
        if (res.status == 200) data = res.json();
        else throw "Value hasn't got" 
    } catch (e) {
        console.log(e);
    }


    return <Graphic name={'Название графика'} desc={'Краткое описание графика'} data={data}/>
}