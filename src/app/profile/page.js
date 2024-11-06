import { Edit, Exit } from "../components/Buttons";
import { BaseP, H3, LittleP, SpanGrad } from "../components/Text";
import { GetAchivements } from "../components/getters"
import Graphic from "../components/graphic";
import PageWrap from "../components/BasePageWrap";

export default function Profile() {
    let url = 'DefProfile.png';

    let size = 144;
    return (
        <PageWrap>
            <div className="flex gap-x-base tablet:gap-x-tab-base w-full p-2.5 justify-between">
                <div className={`rounded-full profileimg bg-cover bg-no-repeat bg-center shadow-drop`} style={{backgroundImage: `url(${url})`}}></div>
                <ProfileInfo size={size}/>
            </div>
            <Achives />
            <NeuroMean />
            <p className="text-dark text-base">Если бы вы не получали штрафы, то могли бы купить немало <SpanGrad text={'крипты'} className="font-bold text-subtitle"/></p>
            <Graphic name={'Название графика'} desc={'Краткое описание графика'}/>
        </PageWrap>
    )
}

function ProfileInfo({size}) {
    let user = {id: 'ID пользователя', name: 'Имя', lastname: 'Фамилия', surname: 'Отчество'}

    return (
        <div className={`h-[${size}px] flex flex-col justify-between items-end`}>
            <H3>{`${user.name} ${user.lastname}${user.surname != '' ? user.surname : ''}`}</H3>
            <BaseP text={user.id}/>
            <Edit url={'!#'}/>
            <Exit />
        </div>
    )
}

function Achives() {
    return (
        <div className="flex flex-col gap-y-base tablet:gap-y-tab-base">
            <H3>Мои <SpanGrad text={'достижения'} className="font-bold"/></H3>
            <ul className="flex w-full overflow-x-scroll gap-x-base tablet:gap-x-tab-base">
                <GetAchivements size={44}/>
            </ul>
        </div>
    )
}

function NeuroMean() {
    return (
        <div className={`flex flex-col gap-y-base tablet:gap-y-tab-base`}>
            <H3>Как тебя видит нейросеть</H3>
            <NeouroPost neuroName={'GPT'}/>
            <NeouroPost neuroName={'Сбер'}/>
        </div>
    )
}

function NeouroPost({neuroName}) {
    let date = '01.01.2024';
    let urlImg = `${neuroName}.jpg`;

    return (
        <div className="rounded-base overflow-hidden bg-white shadow-drop">
            <div className="flex flex-col gap-y-base p-2.5 tablet:gap-y-tab-base">
                <H3>{neuroName}</H3>
                <LittleP text={date}/>
            </div>
            <div className="bg-cover bg-no-repeat bg-center w-full h-[266px]" style={{backgroundImage: `url('/${urlImg}')`}}></div>
        </div>
    )
}