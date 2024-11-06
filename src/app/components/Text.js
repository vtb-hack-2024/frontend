import { horisontalGradient } from "./gradientCss"

export function H5({children}) {
    return <h5 className="text-dark text-subtitle tablet:text-subtitle-t desktop:text-subtitle-d">{children}</h5>
}

export function H4({children}) {
    return <h4 className="text-dark font-bold text-subtitle tablet:text-subtitle-t desktop:text-subtitle-d">{children}</h4>
}

export function H3({children}) {
    return <h3 className="text-dark text-l-title tablet:text-l-title-t desktop:text-l-title-d">{children}</h3>
}

export function BaseP({className='', text}) {
    return <p className={`text-dark ${className} text-base tablet:text-base-t desktop:text-base-d`}>{text}</p>
}

export function LittleP({className='', text}) {
    return <p className={`text-dark ${className} text-l-base tablet:text-l-base-t desktop:text-l-base-d`}>{text}</p>
}

export function WhiteP({className='', text}) {
    return <p className={className}>{text}</p>
}

export function PageTitle({children}) {
    return <h2 className="font-bold text-dark text-title tablet:text-title-t desktop:text-title-d">{children}</h2>
}

export function SpanGrad({className='', text}) {
    return <span className={`${horisontalGradient} ${className}`}>{text}</span>
}