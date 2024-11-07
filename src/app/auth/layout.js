export default function AuthLayout({children}) {
    return (
        // <div className="wrapper flex justify-center items-center h-screen w-full">
        <div className="wrapper pt-[200px] tablet:pt-[150px] desktop:pt-[100px] w-full s-wrapper">
            {children}
        </div>
    )
}