
import { Header } from '@/components/Header';
import { PieChart } from '@/components/PieChart';
import { Profile } from '@/components/Profile';
import { ProfileStats } from '@/components/ProfileStats';
import { Repositories } from '@/components/Repositories';
import { ProfileType } from '@/interface/profile';
import { RepositoryType } from '@/interface/repository';
import { getLanguages } from '@/utils/getLanguages';
import { getLimit } from '@/utils/getLimit';
import { getProfile } from '@/utils/getProfile';
import { getRepositories } from '@/utils/getRepositories';

export default async function DashboardPage({ ...params }) {

    const { searchParams } = params
    const { username } = await searchParams

    const profile: ProfileType = await getProfile(username)
    const languages = await getLanguages(username)
    const repos: RepositoryType[] = await getRepositories(username)
    const rateLimit = await getLimit()
    

    return (
        <div className="flex flex-col">
            <main className='flex flex-col gap-4 py-4 px-8 '>
                <Header remaining={rateLimit.remaining} limit={rateLimit.limit} />
                <section className='flex flex-col gap-4'>
                    <Profile url={profile.avatar_url} name={profile.name} login={profile.login} location={profile.location} />
                    <ProfileStats publicRepos={profile.public_repos} followers={profile.followers} followings={profile.following} />
                </section>
                <section>
                    <PieChart languages={languages} />
                </section>
                <section>
                    <Repositories languages={Object.keys(languages)} repos={repos} />
                </section>
            </main>
            <footer className='h-12 w-full bg-[#76BBFF] text-white flex items-center justify-center'>
                <p>Next.js - Tailwind CSS - Chart.js - Github API</p>
            </footer>
        </div>
    );
}