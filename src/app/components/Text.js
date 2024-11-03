import { horisontalGradient } from "./gradientCss"

export function H5({children}) {
    return <h5 className="text-dark text-subtitle">{children}</h5>
}

export function H4({children}) {
    return <h4 className="text-dark font-bold text-subtitle">{children}</h4>
}

export function H3({children}) {
    return <h3 className="text-dark text-l-title">{children}</h3>
}

export function BaseP({className='', text}) {
    return <p className={`text-dark ${className} text-base`}>{text}</p>
}

export function LittleP({className='', text}) {
    return <p className={`text-dark ${className} text-l-base`}>{text}</p>
}

export function WhiteP({className='', text}) {
    return <p className={className}>{text}</p>
}

export function PageTitle({children}) {
    return <h2 className="font-bold text-dark text-title">{children}</h2>
}

export function SpanGrad({className='', text}) {
    return <span className={`${horisontalGradient} ${className}`}>{text}</span>
}