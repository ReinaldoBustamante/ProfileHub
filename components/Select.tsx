import React from 'react'

export const Select = ({ options, selectOption }: { options: string[], selectOption: (value: string) => void }) => {
    return (
        <div className="flex self-end gap-2 items-center">
            <label htmlFor="language" className='text-[#175B96]'>Language: </label>
            <select className='p-1 rounded' id='language' onChange={(e) => selectOption(e.target.value)}>
                <option value="">Select language</option>
                {
                    options.map(option => {
                        return <option value={option} key={option}>{option}</option>
                    })
                }
            </select>
        </div>
    )
}
