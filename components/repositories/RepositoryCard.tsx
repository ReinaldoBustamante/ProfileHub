import { RepositoryType } from '@/interface/repository'
import { getColors } from '@/utils/getColors'
import Link from 'next/link'
import React from 'react'
import { IoLink, IoLogoGithub } from "react-icons/io5";

export const RepositoryCard = ({ repository }: { repository: RepositoryType }) => {
    const color = getColors([repository.language ?? ''])
    console.log(repository.url)
    return (
        <li className='p-4 w-full border rounded shadow-md flex flex-col gap-2'>
            <h2 className='text-xl font-semibold text-[#175B96]'>{repository?.name}</h2>
            <p className='text-gray-600'>{repository?.description || "No description"}</p>
            <div className="flex mt-auto justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className='w-4 h-4 rounded-[50%]' style={{ background: color[0] }} />
                    <p className='text-gray-600'>{repository.language}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <Link href={repository.html_url} target='_blank'><IoLogoGithub size={20} className='text-gray-600'/></Link>
                    {
                        repository.homepage ? <Link href={repository.homepage} target='_blank'><IoLink size={20} className='text-gray-600'/></Link> : null
                    }
                </div>
            </div>
        </li>
    )
}
