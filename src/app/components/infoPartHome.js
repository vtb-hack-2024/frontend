'use client'

import Link from "next/link";
import Image from "next/image";
import { NewLink } from "./Buttons";
import NewImage from "./Images";
import { H5, H4, BaseP, H3, SpanGrad} from "./Text";
import { GetAchivements } from "./getters";

export function Name() {
    let name = 'Александр';

    return (
        <h1 className="font-bold text-4xl text-white tablet:hidden">{name}</h1>
    )
}

export function MyAccount() {
    let cond = 500;
     return (
        <div className="flex p-base tablet:p-tab-base items-center rounded-base bg-white shadow-drop">
            <div className="flex flex-col gap-y-2 w-full">
                <H3>Общая сумма штрафов</H3>
                <p className="text-dark text-[32px] tablet:text-[36px] desktop:text-[36px]">{cond}$</p>
                <div className="flex gap-x-base tablet:gap-y-tab-base">
                    <NewLink action={() => {return}} isLink={false} text={'Оплатить'}/>
                    <NewLink url={'/fines'} text={'Подробнее'} />
                </div>
            </div>
            <Link href={'/fines'}>
                <Image src={'t-arrow.svg'} width={24} height={24} alt="arrow"/>
            </Link>
        </div>
     )
}

export function BaseLink() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-1 gap-base tablet:gap-tab-base">
            <Link href={'/payments'} className="w-full flex flex-col gap-y-[17px] p-base tablet:p-tab-base rounded-base shadow-drop bg-white">
                <H5>История платежей</H5>
                <BaseP text={'за последний месяц'} className="opacity-50" />
            </Link>
            <Link href={'/stats'} className="h-full w-full p-base tablet:p-tab-base rounded-base shadow-drop bg-white flex gap-x-5 items-center">
                <NewImage src={'stat.svg'} alt="statistic"/>
                <H5>Статистика штрафов</H5>
            </Link>
        </div>
    )
}

export function Analitic() {
    return (
        <Link href={'/analize'} className="flex gap-x-base tablet:gap-x-tab-base p-base tablet:p-tab-base rounded-base bg-white shadow-drop">
            <NewImage src={'db.svg'} alt={'db'}/>
            <H5>Аналитика штрафов от <SpanGrad text={'нейросети'} className="font-bold"/></H5>
        </Link>
    )
}

export function GIBDD() {
    return (
        <Link href={'https://www.gosuslugi.ru/help/faq/pay_car_penalty/2015'} className="flex gap-x-base tablet:gap-x-tab-base bg-white rounded-base shadow-drop p-base tablet:p-tab-base">
            <div className="flex flex-col gap-y-base tablet:gap-y-tab-base w-full">
                <H5>Как платить меньше?</H5>
                <BaseP text={'Узнать у ГИБДД'} />
            </div>
            <NewImage src={'g-arrow.svg'} alt={'gibdd'}/>
        </Link>
    )
}

export function MyAchivement() {
    let achives = [];
    
    return (
        <Link href={'/achivement'} className="flex flex-col gap-y-base tablet:gap-y-tab-base p-base tablet:p-tab-base rounded-base bg-white shadow-drop">
            <div className="flex gap-x-base tablet:gap-x-tab-base items-center">
                <NewImage src={'Achive.svg'} alt={'Achivements'}/>
                <H5>Мои <SpanGrad text={'достижения'} className="font-bold"/></H5>
            </div>
            <ul className="flex gap-x-base tablet:gap-x-tab-base w-full overflow-x-scroll">
                <GetAchivements />
                {/* {achives.map(elem => <AchiveImage key={elem.id}/>)} */}
            </ul>
        </Link>
    )
}

export function ApiDesc() {
    return (
        <Link href={'/apis'} className="flex flex-nowrap gap-x-base tablet:gap-x-tab-base p-base tablet:p-tab-base rounded-base bg-white shadow-drop">
            <NewImage src={'Api.svg'} alt={'Api'}/>
            <div className="flex flex-col gap-y-base tablet:gap-y-tab-base w-full">
                <H4>Описание <span className="font-bold text-blue">API</span></H4>
                <BaseP text={'Узнать подробнее про API приложения...'}/>
            </div>
        </Link>
    )
}