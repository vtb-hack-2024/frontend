import { horisontalGradient } from "../components/gradientCss";
import { BaseP, PageTitle, SpanGrad } from "../components/Text";
import { GetAchivements } from "../components/getters";
import PageWrap from "../components/BasePageWrap";

export default function Page() {

    return (
        <PageWrap>
            <PageTitle>Мои <SpanGrad text={'достижения'} /></PageTitle>
            <BaseP text={'Ездите и получайте награды'}/>
            <ul className="grid grid-cols-4 gap-y-2.5 w-full p-2.5 rounded-base bg-white">
                <GetAchivements full={true} />
            </ul>
        </PageWrap>
    )
}