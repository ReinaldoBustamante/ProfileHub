"use client"
import { useFilter } from '@/hooks/useFilter'
import { usePagination } from '@/hooks/usePagination'
import { RepositoryType } from '@/interface/repository'
import { Select } from '../Select'
import { RepositoriesList } from './RepositoriesList'
import { PaginationButtons } from './paginationButtons'

export const Repositories = ({ languages, repos }: { languages: string[], repos: RepositoryType[] }) => {
 
    const {repositories, languageSelect} = useFilter(repos)
    const {pagination, buttonValues, handlePagination} = usePagination(repositories)

    return (
        <div>
            <div className='flex items-end gap-1'>
                <h2 className='text-2xl text-[#175B96] font-semibold'>Repositories</h2>
                <span className="text-[12px] bg-[#76BBFF] px-2 text-white mb-1 ">Last 30</span>
            </div>
            <div className="flex w-full flex-col gap-2 mt-2">
                <Select options={languages} selectOption={languageSelect} />
                <RepositoriesList repositories={repositories.slice(pagination.startCursor, pagination.endCursor)} />
                <PaginationButtons buttonValues={buttonValues} handlePagination={handlePagination}/>
            </div>
        </div>
    )
}
