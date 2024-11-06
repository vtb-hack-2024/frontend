'use client'

import Image from "next/image"
import { useState } from "react"

export default function NewImage({src, alt}) {
    const width = window.innerWidth

    if (width < 700) return <Image src={src} alt={alt} height={24} width={24}/>;
    else if (width > 900) return <Image src={src} alt={alt} height={32} width={32}/>;
    else return <Image src={src} alt={alt} height={28} width={28}/>;

    // return <Image src={src} alt={alt} height={24} width={24}/>
}

// export function AchiveImage({part, key}) {
//     const [donePart, setDonePart] = useState(part);

//     return <li key={key}></li>
// }