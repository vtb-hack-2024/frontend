'use server'

import { headers } from "next/headers";
import PageWrap from "../components/BasePageWrap";
import Graphic from "../components/graphic";
import { BaseP, PageTitle, SpanGrad } from "../components/Text";

export default async function Stats({params}) {
    const currentUrl = await headers();   
    console.log(currentUrl.get("referer"))
    // console.log(await params);
    let data = [
        {
            id: 1,
            name: 'Название графика',
            desk: 'Краткое описание графика'
        },
        {
            id: 2,
            name: 'Название графика',
            desk: 'Краткое описание графика'
        },
        {
            id: 3,
            name: 'Название графика',
            desk: 'Краткое описание графика'
        }  
    ];

    return (
        <PageWrap>
            <PageTitle>Статистика моих <SpanGrad text={'поедзок'}/> и <SpanGrad text={'штрафов'}/></PageTitle>
            <BaseP text={'Lorem ipsum dolor sit amet consectetur. Interdum quis tristique sollicitudin ac bibendum auctor. Laoreet sollicitudin dui fringilla egestas dapibus tellus morbi dolor cras. Rhoncus ante faucibus accumsan in netus. Accumsan dolor ac magna aliquet. Tortor pellentesque pulvinar nisl vitae. Leo pulvinar augue molestie aliquam quis mattis facilisi sed.'}/>
            {data.map(graphic => <Graphic key={1} name={graphic.name} desc={graphic.desk}/>)}
        </PageWrap>
    )
}