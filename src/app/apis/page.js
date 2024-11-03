import { BaseP, H4, LittleP, PageTitle } from "../components/Text";
import Link from "next/link";
import NewImage from "../components/Images";

export default function ApisPage() {
    let apis = [
        {
            id: 1,
            name: 'Название API',
            desc: 'Узнать подробнее про API приложения...',
            imgUrl: 'ApiSimbol.svg',
        },
        {
            id: 2,
            name: 'Название API',
            desc: 'Узнать подробнее про API приложения...',
            imgUrl: 'ApiSimbol.svg',
        },
        {
            id: 3,
            name: 'Название API',
            desc: 'Узнать подробнее про API приложения...',
            imgUrl: 'ApiSimbol.svg',
        },
        {
            id: 4,
            name: 'Название API',
            desc: 'Узнать подробнее про API приложения...',
            imgUrl: 'ApiSimbol.svg',
        },
        {
            id: 5,
            name: 'Название API',
            desc: 'Узнать подробнее про API приложения...',
            imgUrl: 'ApiSimbol.svg',
        }
    ]

    return (
        <div className="pt-5 flex flex-col gap-y-2.5 wrapper text-title">
            <PageTitle>Описание <span className="text-blue">API</span></PageTitle>
            <BaseP text={'Некоторое описание API приложения'}/>
            {apis.map(api => <OnceApi key={api.id} id={api.id} name={api.name} desc={api.desc} imgUrl={api.imgUrl}/>)}
        </div>
    )
}

function OnceApi({name, desc, imgUrl, id}) {
    return (
        <Link href={`/descapi/${id}`} className="rounded-base border-blue border-[1px] bg-white shadow-drop flex gap-x-2.5 w-full p-2.5">
            <NewImage alt='apiSimbol' src={imgUrl} />
            <div className="flex flex-col gap-y-2.5 w-full">
                <H4>{name}</H4>
                <LittleP text={desc}/>
            </div>
            <NewImage alt="arrow" src={'t-arrow.svg'}  />
        </Link>
    )
}