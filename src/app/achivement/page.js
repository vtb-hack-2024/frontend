import { horisontalGradient, verticalGradient } from "../components/gradientCss";
import { PageTitle } from "../components/Text";

export default function Page() {
    return (
        <div className="pt-5 flex flex-col gap-y-2.5 wrapper">
            <PageTitle>Мои <span className={`${horisontalGradient}`}>достижения</span></PageTitle>
        </div>
    )
}