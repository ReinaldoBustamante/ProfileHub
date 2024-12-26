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
        <div className="flex gap-4 items-center">
            <div className="w-[130px] h-[130px] border-[2px] border-[#76BBFF] rounded-[50%]">
                <Image
                    src={url}
                    className='rounded-[50%]'
                    alt="Description"
                    width={130}
                    height={130}
                />
            </div>
            <div className="flex flex-col ">
                <p className="text-[20px] text-white font-semibold">{name}</p>
                <p className="text-white">{login}</p>
                <p className="text-white">{location}</p>
            </div>
        </div>
    )
}
