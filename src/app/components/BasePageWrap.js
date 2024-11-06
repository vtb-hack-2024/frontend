export default function PageWrap({children}) {
    return (
        <div className="py-5 tablet:py-0 flex flex-col gap-y-2.5 wrapper s-wrapper">{children}</div>
    )
}