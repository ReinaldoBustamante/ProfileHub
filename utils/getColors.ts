import languagesColors from '@/constants/languages.json'

type LanguageColors = {
    [key: string]: {
        type?: string;
        extensions?: string[];
        tm_scope?: string;
        ace_mode?: string
        language_id?: number
        color?: string;
    }
}



export const getColors = (languages: string[]) => {

    const colors: LanguageColors = languagesColors
    return languages.map(language => colors[language]?.color || '#ffffff')
   
}