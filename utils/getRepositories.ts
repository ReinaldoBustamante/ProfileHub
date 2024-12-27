export const getRepositories = async(username: string) => {
    const reposResponse = await fetch(`http://localhost:3000/api/repos?username=${username}`)
    const userRepositories = await reposResponse.json()
    return userRepositories
}