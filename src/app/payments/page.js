'use server'

import PageWrap from "../components/BasePageWrap"
import { H5, LittleP, PageTitle, SpanGrad } from "../components/Text"
import NewImage from "../components/Images"
import Link from "next/link"

export default async function PagePayments() {
    let payments = [
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
            <PageTitle>История платежей</PageTitle>
            {payments.map(payment => <Payment key={payment.id} payment={payment}/>)}
        </PageWrap>
    )
}

function Payment({payment}) {
    return (
        <Link className="flex gap-x-base tablet:gap-x-tab-base items-center w-full p-2.5 rounded-base bg-white shadow-drop" href={`/payment/${payment.id}`}>
            <div className="flex flex-col gap-y-base tablet:gap-x-tab-base w-full">
                <H5>{payment.category}</H5>
                <p className="text-2xl text-green">{payment.amount}</p>
                <LittleP text={payment.date}/>
            </div>
            <NewImage src={'g-arrow.svg'} alt={'gibdd'}/>
        </Link>
    )
}