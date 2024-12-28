import React from 'react'

interface ProfileStatsProps {
    publicRepos: number;
    followers: number;
    followings: number
}

export const ProfileStats = ({publicRepos, followers, followings}: ProfileStatsProps) => {
    return (
        <div className="flex flex-col gap-2 md:w-full md:order-2">
            <div className="flex flex-col justify-center items-center rounded bg-[#76BBFF] gap-1 py-2 shadow-md md:flex-1 ">
                <p className='text-[32px] text-white'>{publicRepos}</p>
                <p className='text-[16px] text-white'>Repositories</p>
            </div>
            <div className="flex gap-2 md:flex-1 ">
                <div className="flex flex-col flex-1 justify-center items-center rounded bg-[#76BBFF] gap-1 py-2 shadow-md ">
                    <p className='text-[32px] text-white'>{followers}</p>
                    <p className='text-[16px] text-white'>Followers</p>
                </div>
                <div className="flex flex-col flex-1 justify-center items-center rounded bg-[#76BBFF] gap-1 py-2 shadow-md ">
                    <p className='text-[32px] text-white'>{followings}</p>
                    <p className='text-[16px] text-white'>Followings</p>
                </div>
            </div>
        </div>
    )
}
