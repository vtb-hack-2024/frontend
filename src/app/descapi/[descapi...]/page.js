'use server';

import { PageTitle } from "@/app/components/Text";
import { BaseP } from "@/app/components/Text";
import PageWrap from "@/app/components/BasePageWrap";

export default async function Page({params}) {
    let param = await params;
    const apiId = param['descapi...'];
    let api = {
        name: 'Название API',
        desc: 'Некоторое описание API приложения'
    }
    console.log(apiId);

    return (
        <PageWrap>
            <PageTitle>{api.name}</PageTitle>
            <BaseP text={api.desc}/>
        </PageWrap>
    )
}