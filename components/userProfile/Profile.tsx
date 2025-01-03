import Image from 'next/image';

import React from 'react'

interface ProfileProps {
    url: string,
    name: string,
    login: string,
    location: string
}

export const Profile = ({ url, name, login, location }: ProfileProps) => {
    return (
        <div className="flex gap-4 items-center md:justify-center md:flex-col md:gap-1">
            <div className="border-[4px] border-[#76BBFF] rounded-[50%]">
                <Image
                    src={url}
                    className='rounded-[50%]'
                    alt="Description"
                    width={130}
                    height={130}
                    priority
                />
            </div>
            <div className="flex flex-col items-center">
                <p className="text-[20px] text-white font-semibold">{name}</p>
                <p className="text-white"><span className='font-bold'>@</span>{login}</p>
                <p className="text-white">{location}</p>
            </div>
        </div>
    )
}
