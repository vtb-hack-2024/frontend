'use server'

import PageWrap from "../components/BasePageWrap";
import { serverHost } from "../components/host";
import { BaseP, PageTitle, SpanGrad } from "../components/Text";
import newSession from "../utils/auth";

export default async function AnalizePage() {
    let data = 'Lorem ipsum dolor sit amet consectetur. Interdum quis tristique sollicitudin ac bibendum auctor. Laoreet sollicitudin dui fringilla egestas dapibus tellus morbi dolor cras. Rhoncus ante faucibus accumsan in netus. Accumsan dolor ac magna aliquet. Tortor pellentesque pulvinar nisl vitae. Leo pulvinar augue molestie aliquam quis mattis facilisi sed.';

    try {
        let res = await fetch(`http://${serverHost}/getanalize?userId=${newSession.getUserId}&access=${newSession.getUserId}`, {method: 'GET'});
        if (res.status == 200) data = res.json();
        else throw toString(res.status);
    } catch (e) {
        console.log(e);
    }

    return (
        <PageWrap>
            <PageTitle>Аналитика штрафов от <SpanGrad text={'нейросети'}/></PageTitle>
            <BaseP text={data}/>
        </PageWrap>
    )
}