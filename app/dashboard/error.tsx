"use client"
interface ErrorPageProps {
    error: Error;
}

export default function ErrorPage({ error }: ErrorPageProps) {
    console.log(error)
    return (
        <div className="h-screen items-center flex justify-center ">
            <div className="bg-[#76BBFF] p-4 rounded">
                <h1 className="text-3xl text-white">{error.message}</h1>
            </div>
        </div>
    );
}