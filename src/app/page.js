import {Name, MyAccount, BaseLink, Analitic, GIBDD, MyAchivement, ApiDesc} from './components/infoPartHome.js'

export default function Home() {
  return (
    <div className="relative">
      <div className="w-full bg-cover rounded-b-2.5 aspect-bg bg-center bg-no-repeat absolute z-0" style={{backgroundImage: 'url(/MainFon.jpg)'}}></div>
      <div className="relative flex flex-col gap-y-2.5 wrapper z-50 pt-14">
        <Name />
        <MyAccount />
        <BaseLink />
        <Analitic />
        <GIBDD />
        <MyAchivement />
        <ApiDesc />
      </div>
    </div>
  );
}
