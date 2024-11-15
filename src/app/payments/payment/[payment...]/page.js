'use server'

import PageWrap from "@/app/components/BasePageWrap";
import newSession from "@/app/utils/auth";
import { serverHost } from "@/app/components/host";

export default async function Payment({params}) {
    let data = await params;
    const id = data['paymentid...'];
    console.log(id);
    
    try {
       let res = await fetch(`http://${serverHost}/getpayment?paymentId=${id}&access=${newSession.getAccess()}`);
       if (res.status == 200) data = await res.json();
       else throw "Value hasn't got"
    } catch (e) {
       console.log(e);
    }

    return (
        <PageWrap>
        </PageWrap>
    )
}