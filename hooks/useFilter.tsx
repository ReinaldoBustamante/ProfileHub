import { RepositoryType } from '@/interface/repository';
import { useMemo, useState } from 'react'

export const useFilter = (repos: RepositoryType[]) => {
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

    const languageSelect = (language: string) => {
        setLanguageSelected(language)
    }

    return {
        repositories,
        languageSelect
    }
}
