export default function PageWrap({children}) {
    return (
        <div className="py-5 flex flex-col gap-y-2.5 wrapper">{children}</div>
    )
}