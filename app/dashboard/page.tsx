
import Image from 'next/image';

export default async function DashboardPage({ ...params }) {

    const { searchParams } = params

    const { username } = await searchParams
    console.log(username)

    const profileResponse = await fetch(`http://localhost:3000/api/profile?username=${username}`)
    const userProfile = await profileResponse.json()
    const { data: profile} = userProfile

 
    const languagesResponse = await fetch(`http://localhost:3000/api/languages?username=${username}`)
    const userLanguages = await languagesResponse.json()
    const { data: languages} = userLanguages
 
    const reposResponse = await fetch(`http://localhost:3000/api/repos?username=${username}`)
    const userRepositories = await reposResponse.json()
    const { data: repos, rate_limit: rateLimit} = userRepositories

    return (
        <div className="flex flex-col gap-[14px]">
            <header className="flex justify-between items-center">
                <span className="text-white font-bold text-[20px]">ProfileHub</span>
                <p className="text-[20px] px-3 py-2 rounded bg-[#76BBFF] text-white">{rateLimit.remaining / 2}/{rateLimit.limit / 2}</p>
            </header>
            <main className='flex flex-col gap-4'>
                <div className="flex gap-4 items-center">
                    <div className="w-[130px] h-[130px] border-[2px] border-[#76BBFF] rounded-[50%]">
                        <Image
                            src={profile.avatar_url}
                            className='rounded-[50%]'
                            alt="Description"
                            width={130}
                            height={130}
                        />
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-[20px] text-white font-semibold">{profile.name}</p>
                        <p className="text-white">{profile.login}</p>
                        <p className="text-white">{profile.location}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col justify-center items-center rounded bg-[#76BBFF] gap-1 py-2 shadow-md">
                        <p className='text-[32px] text-white'>{profile.public_repos}</p>
                        <p className='text-[16px] text-white'>Repositories</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex flex-col flex-1 justify-center items-center rounded bg-[#76BBFF] gap-1 py-2 shadow-md">
                            <p className='text-[32px] text-white'>{profile.followers}</p>
                            <p className='text-[16px] text-white'>Followers</p>
                        </div>
                        <div className="flex flex-col flex-1 justify-center items-center rounded bg-[#76BBFF] gap-1 py-2 shadow-md">
                            <p className='text-[32px] text-white'>{profile.following}</p>
                            <p className='text-[16px] text-white'>Followings</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}