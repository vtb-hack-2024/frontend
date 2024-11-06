'use server'

import PageWrap from "../components/BasePageWrap"
import { H5, LittleP, PageTitle, SpanGrad } from "../components/Text"
import NewImage from "../components/Images"
import Link from "next/link"

export default async function PageFines() {
    let fines = [
        {
            id: 1,
            category: 'Превышение скорости',
            amount: 500,
            date: '01.01.2024'
        },
        {
            id: 2,
            category: 'Превышение скорости',
            amount: 500,
            date: '01.01.2024'
        },
        {
            id: 3,
            category: 'Превышение скорости',
            amount: 500,
            date: '01.01.2024'
        },
        {
            id: 4,
            category: 'Превышение скорости',
            amount: 500,
            date: '01.01.2024'
        },
        {
            id: 5,
            category: 'Превышение скорости',
            amount: 500,
            date: '01.01.2024'
        }
    ];

    return (
        <PageWrap>
            <PageTitle>Мои неоплаченные <SpanGrad text={'штрафы'}/></PageTitle>
            {fines.map(fine => <Fine key={fine.id} fine={fine}/>)}
        </PageWrap>
    )
}

function Fine({fine}) {
    return (
        <Link className="flex gap-x-base tablet:gap-x-tab-base items-center w-full p-2.5 rounded-base bg-white shadow-drop" href={`/fine/${fine.id}`}>
            <div className="flex flex-col gap-y-2.5 tablet:gap-y-tab-base w-full">
                <H5>{fine.category}</H5>
                <p className="text-2xl text-red">{fine.amount}</p>
                <LittleP text={fine.date}/>
            </div>
            <NewImage src={'g-arrow.svg'} alt={'gibdd'}/>
        </Link>
    )
}