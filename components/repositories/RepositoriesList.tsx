import { RepositoryType } from '@/interface/repository'
import React from 'react'
import { RepositoryCard } from './RepositoryCard'

export const RepositoriesList = ({ repositories }: { repositories: RepositoryType[] }) => {
    return (
        <ul className="flex flex-col gap-2 md:grid md:grid-cols-3">
            {
                repositories?.map(repository => <RepositoryCard key={repository.id} repository={repository} />)
            }
        </ul>
    )
}
