
import Image from 'next/image';

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-screen absolute h-screen md:h-[365px]'>
                <Image
                    src="/background.svg"
                    alt="Description"
                    fill
                    objectFit='cover'
                    objectPosition='top right'
                    className='absolute z-1'
                    priority
                />
            </div>
            <div className="relative z-2 md:w-[1024px]">
                {children}
            </div>
            <footer className='h-12 w-full bg-[#76BBFF] text-white flex items-center justify-center font-bold'>
                <p>Next.js - Tailwind CSS - Chart.js - Github API</p>
            </footer>
        </div>
    );
}