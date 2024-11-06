import {Name, MyAccount, BaseLink, Analitic, GIBDD, MyAchivement, ApiDesc} from './components/infoPartHome.js'

export default function Home() {
  return (
    <div className="relative">
      <div className="tablet:hidden w-full bg-cover rounded-b-2.5 aspect-bg bg-center bg-no-repeat absolute z-0" style={{backgroundImage: 'url(/MainFon.jpg)'}}></div>
      <div className="relative flex flex-col gap-y-2.5 wrapper s-wrapper z-40 pt-14 tablet:pt-0">
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
