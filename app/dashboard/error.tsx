"use client"
interface ErrorPageProps {
    error: Error;
}

export default function ErrorPage({ error }: ErrorPageProps) {
    return (
        <div className="h-screen items-center flex justify-center ">
            <div className="bg-[#76BBFF] p-4 rounded">
                <h1 className="text-3xl text-white">
                    {
                        error.message === 'Too many attempts, please try again later'
                            ? 'Too many attempts, please try again later'
                            : 'User not found'
                    }
                </h1>
            </div>
        </div>
    );
}