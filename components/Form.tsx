'use client'

import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export const Form = () => {

    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState('')

    const router = useRouter()
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (inputValue === '') return setError('Missing username')
        router.push(`/dashboard?username=${inputValue}`)
    }

    return (
        <form className="flex flex-col gap-1 md:w-[300px] w-[200px]" onSubmit={handleSubmit}>
            <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder='ReinaldoBustamante' type="text" className="w-full py-1 px-2 border border-gray-400 rounded" />
            <button type='submit' className="w-full  p-2 bg-blue-500 rounded font-semibold text-white">Search profile</button>
            {
                error 
                    ? <p className='w-full p-2 text-red-800 bg-red-300 text-center rounded'>{error}</p>
                    : null
            }
        </form>
    )
}
