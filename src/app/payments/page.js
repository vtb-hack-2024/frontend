'use server'

import PageWrap from "../components/BasePageWrap"
import { H5, LittleP, PageTitle, SpanGrad } from "../components/Text"
import NewImage from "../components/Images"
import Link from "next/link"
import { serverHost } from "../components/host"
import newSession from "../utils/auth"

export default async function PagePayments() {
    let userId = 1;
    let accessToken = 'asd'
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

    try {
        let res = await fetch(`http://${serverHost}/getpayments?userId=${newSession.getUserId()}&access=${newSession.getAccess()}`)
        if (res.status == 200) payments = await res.json();
        else throw "Value hasn't got"
    } catch (e) {
        console.log(e);
    }

    return (
        <PageWrap>
            <PageTitle>История платежей</PageTitle>
            {payments.map(payment => <Payment key={payment.id} payment={payment}/>)}
        </PageWrap>
    )
}

function Payment({payment}) {
    return (
        <Link className="flex gap-x-base tablet:gap-x-tab-base items-center w-full p-base tablet:p-tab-base rounded-base bg-white shadow-drop" href={`/payment/${payment.id}`}>
            <div className="flex flex-col gap-y-base tablet:gap-x-tab-base w-full">
                <H5>{payment.category}</H5>
                <p className="text-2xl tablet:text-3xl desktop:text-4xl text-green">{payment.amount}</p>
                <LittleP text={payment.date}/>
            </div>
            <NewImage src={'g-arrow.svg'} alt={'gibdd'}/>
        </Link>
    )
}