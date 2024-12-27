import { RepositoryType } from '@/interface/repository';
import { useEffect, useState } from 'react'

export const usePagination = (repositories: RepositoryType[]) => {
    const [pagination, setPagination] = useState({
        startCursor: 0,
        endCursor: 5,
        pages: Math.ceil(repositories.length / 5)
    })

    const [buttonValues, setButtonValues] = useState<number[]>([]);

    useEffect(() => {
        const totalPages = Math.ceil(repositories.length / 5);
        setPagination((prev) => ({
            ...prev,
            pages: totalPages,
            startCursor: 0,
            endCursor: 5,
        }));
        setButtonValues([...Array(totalPages).keys()].map(i => i + 1));
    }, [repositories]);

    const handlePagination = (value: number) => {
        setPagination((prev) => ({
            ...prev,
            startCursor: (value - 1) * 5,
            endCursor: (value) * 5
        }))
    }
    return {
        pagination, 
        buttonValues,
        handlePagination
    }
}
