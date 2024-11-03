'use server';

import { PageTitle } from "@/app/components/Text";
import { BaseP } from "@/app/components/Text";

export default async function Page({params}) {
    let par = await params;
    const apiId = par['descapi...'];
    let api = {
        name: 'Название API',
        desc: 'Некоторое описание API приложения'
    }
    console.log(apiId);

    return (
        <div className="pt-5 flex flex-col gap-y-2.5 wrapper">
            <PageTitle>{api.name}</PageTitle>
            <BaseP text={api.desc}/>
        </div>
    )
}