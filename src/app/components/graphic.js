'use server'

import { serverHost } from "./host";
import { H4, WhiteP } from "./Text";
import { LittleP } from "./Text";

export default async function Graphic({name, desc, data=[]}) {
    let userId = 1;
    if (data.length == 0){
        try {
            let res = await fetch(`http://${serverHost}/getstatsdata/?userId=${userId}&chartName=${name}`, {method: 'GET'});
            if (res.status == 200) data = await res.json();
            else throw `Status code: ${res.status}`;
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="rounded-base overflow-hidden bg-white shadow-drop">
            <div className="flex flex-col gap-y-base tablet:gap-y-tab-base p-base tablet:p-tab-base bg-blue">
                <WhiteP className={'text-white text-base tablet:text-base-t desktop:text-base-d'} text={name} />
                <LittleP text={desc} className="text-white"/>
            </div>
            <div className="bg-contain bg-no-repeat bg-center w-full h-[178px]" style={{backgroundImage: `url('/graphic.svg')`}}></div>
        </div>
    )
}