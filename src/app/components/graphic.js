import { H4, WhiteP } from "./Text";
import { LittleP } from "./Text";

export default function Graphic({name, desc}) {
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