export default function PageWrap({children}) {
    return (
        <div className="py-5 tablet:py-0 flex flex-col gap-y-base tablet:gap-y-tab-base wrapper s-wrapper">{children}</div>
    )
}