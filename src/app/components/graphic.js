import { H4, WhiteP } from "./Text";
import { LittleP } from "./Text";

export default function Graphic() {
    return (
        <div className="rounded-base overflow-hidden bg-white shadow-drop">
            <div className="flex flex-col gap-y-2.5 p-2.5 bg-blue">
                <WhiteP className={'text-white'} text={'Название графика'} />
                <LittleP text={'Краткое описание графика'} className="text-white"/>
            </div>
            <div className="bg-contain bg-no-repeat bg-center w-full h-[178px]" style={{backgroundImage: `url('/graphic.svg')`}}></div>
        </div>
    )
}