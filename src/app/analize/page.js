import PageWrap from "../components/BasePageWrap";
import { BaseP, PageTitle, SpanGrad } from "../components/Text";

export default function AnalizePage() {
    let data = 'Lorem ipsum dolor sit amet consectetur. Interdum quis tristique sollicitudin ac bibendum auctor. Laoreet sollicitudin dui fringilla egestas dapibus tellus morbi dolor cras. Rhoncus ante faucibus accumsan in netus. Accumsan dolor ac magna aliquet. Tortor pellentesque pulvinar nisl vitae. Leo pulvinar augue molestie aliquam quis mattis facilisi sed.';

    return (
        <PageWrap>
            <PageTitle>Аналитика штрафов от <SpanGrad text={'нейросети'}/></PageTitle>
            <BaseP text={data}/>
        </PageWrap>
    )
}