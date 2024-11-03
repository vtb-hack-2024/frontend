import { Edit, Exit } from "../components/Buttons"
import { BaseP, H3, LittleP } from "../components/Text"
import { horisontalGradient, verticalGradient } from "../components/gradientCss"
import { GetAchivements } from "../components/getters"
import Graphic from "../components/graphic"

export default function Profile() {
    let url = 'DefProfile.png';

    let size = 144;
    return (
        <div className="flex flex-col gap-y-2.5 py-5 wrapper">
            <div className="flex gap-x-2.5 w-full p-2.5 justify-between">
                <div className={`rounded-full profileimg bg-cover bg-no-repeat bg-center shadow-drop`} style={{backgroundImage: `url(${url})`}}></div>
                <ProfileInfo size={size}/>
            </div>
            <Achives />
            <p className="text-dark text-base">Если бы вы не получали штрафы, то могли бы купить немало <span className={`font-bold text-subtitle ${horisontalGradient}`}>крипты</span></p>
            <Graphic />
        </div>
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
        <div className="flex flex-col gap-y-2.5 ">
            <H3>Мои <span className={`font-bold ${horisontalGradient}`}>достижения</span></H3>
            <ul className="flex w-full overflow-x-scroll">
                <GetAchivements size={44}/>
            </ul>
            <NeuroMean />
        </div>
    )
}

function NeuroMean() {
    return (
        <div className={`flex flex-col gap-y-2.5`}>
            <H3>Как тебя видит нейросеть</H3>
            <NeouroPost neuroName={'GPT'}/>
            <NeouroPost neuroName={'Сбер'}/>
        </div>
    )
}

function NeouroPost({neuroName}) {
    let date = Date.now();
    let urlImg = `${neuroName}.jpg`;

    return (
        <div className="rounded-base overflow-hidden bg-white shadow-drop">
            <div className="flex flex-col gap-y-2.5 p-2.5">
                <H3>{neuroName}</H3>
                <LittleP text={date}/>
            </div>
            <div className="bg-cover bg-no-repeat bg-center w-full h-[266px]" style={{backgroundImage: `url('/${urlImg}')`}}></div>
        </div>
    )
}