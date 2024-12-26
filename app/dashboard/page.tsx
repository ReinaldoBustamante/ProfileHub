
import { Header } from '@/components/Header';
import { Profile } from '@/components/Profile';
import { ProfileStats } from '@/components/ProfileStats';

export default async function DashboardPage({ ...params }) {

    const { searchParams } = params
    const { username } = await searchParams
    console.log(username)

    const profileResponse = await fetch(`http://localhost:3000/api/profile?username=${username}`)
    const userProfile = await profileResponse.json()
    const { data: profile } = userProfile

    const languagesResponse = await fetch(`http://localhost:3000/api/languages?username=${username}`)
    const userLanguages = await languagesResponse.json()
    const { data: languages } = userLanguages

    const reposResponse = await fetch(`http://localhost:3000/api/repos?username=${username}`)
    const userRepositories = await reposResponse.json()
    const { data: repos, rate_limit: rateLimit } = userRepositories

    return (
        <div className="flex flex-col gap-[14px]">
            <Header remaining={rateLimit.remaining} limit={rateLimit.limit} />
            <main className='flex flex-col gap-4'>
                <section className='flex flex-col gap-4'>
                    <Profile url={profile.avatar_url} name={profile.name} login={profile.login} location={profile.location} />
                    <ProfileStats publicRepos={profile.public_repos} followers={profile.followers} followings={profile.following} />
                </section>
            </main>
        </div>
    );
}