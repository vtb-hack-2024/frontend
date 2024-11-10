'use server'

import PageWrap from "@/app/components/BasePageWrap";
import { serverHost } from "@/app/components/host";
import newSession from "@/app/utils/auth";

export default async function Fine({params}) {
   let data = await params;
   const id = data['fineid...'];
   console.log(id);
   
   try {
      let res = await fetch(`http://${serverHost}/getfine?fineId=${id}&access=${newSession.getAccess()}`);
      if (res.status == 200) data = await res.json();
      else throw "Value hasn't got"
   } catch (e) {
      console.log(e);
   }

   return(
      <PageWrap>
      </PageWrap>
   )
}