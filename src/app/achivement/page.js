'use server'

import { BaseP, PageTitle, SpanGrad } from "../components/Text";
import { GetAchivements } from "../components/getters";
import PageWrap from "../components/BasePageWrap";

export default async function Page() {
    return (
        <PageWrap>
            <PageTitle>Мои <SpanGrad text={'достижения'} /></PageTitle>
            <BaseP text={'Ездите и получайте награды'}/>
            <ul className="grid grid-cols-4 gap-y-base tablet:gap-y-tab-base w-full p-base tablet:p-tab-base rounded-base bg-white">
                <GetAchivements full={true} />
            </ul>
        </PageWrap>
    )
}