'use server'

// import { useState } from "react";
import { verticalGradient } from "./gradientCss";
import { serverHost } from "./host";
import { LittleP } from "./Text";
import Image from "next/image";

export async function GetAchivements({size='', full=false}) {
    // const [achives, setAchives] = useState([]);
    let userId = 1;
    let achives = [
        {
            id: 1,
            donePart: 0.5,
            name: 'Название достижения',
            img: 'AchiveSi.svg'
        },
        {
            id: 2,
            donePart: 0.5,
            name: 'Название достижения',
            img: 'AchiveSi.svg'
        },
        {
            id: 3,
            donePart: 0.5,
            name: 'Название достижения',
            img: 'AchiveSi.svg'
        },
        {
            id: 4,
            donePart: 0.5,
            name: 'Название достижения',
            img: 'AchiveSi.svg'
        },
        {
            id: 5,
            donePart: 0.5,
            name: 'Название достижения',
            img: 'AchiveSi.svg'
        },

        {
            id: 6,
            donePart: 0.5,
            name: 'Название достижения',
            img: 'AchiveSi.svg'
        },
        {
            id: 7,
            donePart: 0.5,
            name: 'Название достижения',
            img: 'AchiveSi.svg'
        },{
            id: 8,
            donePart: 0.5,
            name: 'Название достижения',
            img: 'AchiveSi.svg'
        }
    ];
    // if (achives.length == 0) {

    // }
    try {
        let res = await fetch(`http://${serverHost}/getachives?userId=${userId}`, {method: 'GET'});
        if (res.status == 200) achives = res.json();
        else throw "Value wasn't get";
    } catch (e) {
        console.log(e)
    }

    if (full) {
        return (
            <>
                {achives.map(elem => 
                    <li key={elem.id} className="flex flex-col gap-y-base tablet:gap-y-tab-base">
                        <div className={`relative w-fill flex justify-center items-center`}>
                            <div className={`relative z-40 ${verticalGradient} p-[5px] rounded-full shadow-drop`}>
                                <Image alt={'Simbol'} src={elem.img} width={34} height={34}/>
                            </div>
                            <Segment proportion={elem.donePart}/>
                        </div>
                        <LittleP className={'w-full text-center'} text={elem.name}/>
                    </li>
                )}
            </>
        )
    }
    return (
        <>
            {achives.map(elem => 
                <li key={elem.id} className={`relative w-fill flex flex-none justify-center items-center rounded-full`}>
                    <div className={`relative z-40 ${verticalGradient} p-[5px] rounded-full shadow-drop`}>
                        <Image alt={'Simbol'} src={elem.img} width={34} height={34}/>
                    </div>
                    <Segment proportion={elem.donePart}/>
                </li>
            )}
        </>
    )
}

function Segment({proportion}) {
    return (
        <div className="z-30 absolute w-full h-full">
        </div>
    )
}

export async function getName() {
    let name = 'Александр';
    return name;
}