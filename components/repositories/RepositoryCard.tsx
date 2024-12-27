import { RepositoryType } from '@/interface/repository'
import React from 'react'

export const RepositoryCard = ({ repository }: { repository: RepositoryType }) => {
    return (
        <li className='p-4 w-full border rounded shadow-md flex flex-col gap-2'>
            <h2 className='text-xl font-semibold text-[#175B96]'>{repository?.name}</h2>
            <p className='text-gray-600'>{repository?.description || "No description"}</p>
        </li>
    )
}
