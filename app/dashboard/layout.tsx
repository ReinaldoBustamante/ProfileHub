
import Image from 'next/image';

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Image 
                src="/background-mobile.svg" 
                alt="Description" 
                width={768} 
                height={500} 
                className='absolute z-1'
            />
            <div className="relative z-2 w-screen h-screen">
             {children}
            </div>
        </div>
    );
}