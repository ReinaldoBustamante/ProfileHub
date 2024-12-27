export const getRepositories = async(username: string) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const reposResponse = await fetch(`${apiUrl}/repos?username=${username}`)
    const userRepositories = await reposResponse.json()
    return userRepositories
}