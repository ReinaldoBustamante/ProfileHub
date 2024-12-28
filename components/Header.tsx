import Link from 'next/link'
import React from 'react'

export const Header = ({remaining, limit}: {remaining: number, limit: number}) => {

    return (
        <header className="flex justify-between items-center">
            <Link href={'/'} className="text-white font-bold text-[20px]">ProfileHub</Link>
            <p className="text-[20px] px-3 py-2 rounded bg-[#76BBFF] text-white">{Math.floor(remaining / 2)}/{Math.floor(limit / 2)}</p>
        </header>
    )
}
