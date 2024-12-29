
import { Header } from '@/components/Header';
import { PieChart } from '@/components/charts/PieChart';
import { Profile } from '@/components/userProfile/Profile';
import { ProfileStats } from '@/components/userProfile/ProfileStats';
import { Repositories } from '@/components/repositories/Repositories';
import { ProfileType } from '@/interface/profile';
import { RepositoryType } from '@/interface/repository';
import { getLanguages } from '@/utils/getLanguages';
import { getLimit } from '@/utils/getLimit';
import { getProfile } from '@/utils/getProfile';
import { getRepositories } from '@/utils/getRepositories';


interface DashboardPageProps {
    searchParams: Promise<{ username: string }>
}
export default async function DashboardPage({ searchParams }: DashboardPageProps) {
    const { username } = await searchParams
    const rateLimit = await getLimit()
    if(rateLimit.remaining === 0) throw new Error('Too many attempts, please try again later')
    const profile: ProfileType = await getProfile(username)
    if(profile.error) throw new Error('User not found')
    const languages = await getLanguages(username)
    const repos: RepositoryType[] = await getRepositories(username)
    
    return (
        <div className="flex flex-col">
            <main className='flex flex-col gap-4 py-4 px-8 '>
                <Header remaining={rateLimit.remaining} limit={rateLimit.limit} />
                <section className='flex flex-col gap-4'>
                    <Profile url={profile.avatar_url} name={profile.name} login={profile.login} location={profile.location} />
                    <div className="flex flex-col gap-2 md:flex-row md:justify-center">
                        <ProfileStats publicRepos={profile.public_repos} followers={profile.followers} followings={profile.following} />
                        <PieChart languages={languages} />
                    </div>
                </section>
                <section>
                    <Repositories languages={Object.keys(languages)} repos={repos} />
                </section>
            </main>
          
        </div>
    );
}