import React from 'react'

export const PaginationButtons = ({ buttonValues, handlePagination }: { buttonValues: number[], handlePagination: (value: number) => void }) => {
    return (
        <div className="flex gap-2 items-center justify-center mt-2">
            {
                buttonValues.map(value => {
                    return <button
                        key={value}
                        className='px-3 py-1 bg-[#76BBFF] text-white rounded'
                        onClick={(e) => handlePagination(Number((e.target as HTMLButtonElement).value))}
                        value={value}
                    >
                        {value}
                    </button>
                })
            }
        </div>
    )
}
