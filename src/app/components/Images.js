'use client'

import Image from "next/image"
import { useState } from "react"

export default function NewImage({src, alt}) {
    return <Image src={src} alt={alt} height={24} width={24}/>
}

export function AchiveImage({part, key}) {
    const [donePart, setDonePart] = useState(part);

    return <li key={key}></li>
}