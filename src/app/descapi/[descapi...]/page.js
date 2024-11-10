'use server';

import { PageTitle } from "@/app/components/Text";
import { BaseP } from "@/app/components/Text";
import { ApiWrap } from "@/app/components/BasePageWrap";
import { serverHost } from "@/app/components/host";

export default async function Page({params}) {
    let param = await params;
    
    const apiId = param['descapi...'];
    console.log(param);
    let api = {
        name: 'Название API',
        desc: 'Некоторое описание API приложения'
    }
    console.log(apiId);

    try {
        let res = await fetch(`http://${serverHost}/getfullapiinfo`)
        if (res.status == 200) api = await res.json(); 
        else throw "Value wasn't get";
    } catch (e) {
        console.log(e);
    }
    

    return (
        <ApiWrap>
            <PageTitle>{api.name}</PageTitle>
            <BaseP text={api.desc}/>
        </ApiWrap>
    )
}