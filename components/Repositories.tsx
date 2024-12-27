"use client"
import { Repository } from '@/interface/repository'
import React, { useEffect, useMemo, useState } from 'react'

export const Repositories = ({ languages, repos }: { languages: string[], repos: Repository[] }) => {
    const [languageSelected, setLanguageSelected] = useState('')
    const repositories = useMemo(() => {
        if (languageSelected === 'Undefined') {
            return repos.filter(repo => !repo.language)
        }
        if (languageSelected) {
            return repos.filter(repo => repo.language === languageSelected);
        }
        return repos;
    }, [languageSelected, repos]);

    
    const [pagination, setPagination] = useState({
        startCursor: 0,
        endCursor: 5,
        pages: Math.ceil(repositories.length / 5)
    })

    const [buttons, setButtons] = useState<number[]>([]);

    useEffect(() => {
        const totalPages = Math.ceil(repositories.length / 5);
        setPagination((prev) => ({
            ...prev,
            pages: totalPages,
            startCursor: 0, 
            endCursor: 5,
        }));
        setButtons([...Array(totalPages).keys()].map(i => i + 1));
    }, [repositories]);
    
    const handlePagination = (e: any) => {
        setPagination((prev) => ({
            ...prev,
            startCursor: (e.target.value - 1) * 5,
            endCursor: (e.target.value) * 5
        }))
    }

    return (
        <div>
            <div className='flex items-end gap-1'>
                <h2 className='text-2xl text-[#175B96] font-semibold'>Repositories</h2>
                <span className="text-[12px] bg-[#76BBFF] px-2 text-white mb-1 ">Last 30</span>
            </div>
            <div className="flex w-full flex-col gap-2 mt-2">
                <div className="flex self-end gap-2 items-center">
                    <label htmlFor="language" className='text-[#175B96]'>Language: </label>
                    <select className='p-1 rounded' id='language' onChange={(e) => setLanguageSelected(e.target.value)}>
                        <option value="">All</option>
                        {
                            languages.map(language => {
                                return <option value={language} key={language}>{language}</option>
                            })
                        }
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    {
                        repositories?.slice(pagination.startCursor, pagination.endCursor).map(repository => {
                            return <div key={repository?.id} className='p-4 w-full border rounded shadow-md flex flex-col gap-2'>
                                <h2 className='text-xl font-semibold'>{repository?.name}</h2>
                                <p>{repository?.description || "No description"}</p>
                            </div>
                        })
                    }
                </div>
                <div className="flex gap-2 items-center justify-center mt-2">
                    {
                        buttons.map(button => <button key={button} className='px-3 py-1 bg-[#76BBFF] text-white rounded' onClick={handlePagination} value={button}>{button}</button>)
                    }
                </div>
            </div>
        </div>
    )
}
