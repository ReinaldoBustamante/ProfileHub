export const getProfile = async (username: string) => {
    const profileResponse = await fetch(`http://localhost:3000/api/profile?username=${username}`)
    const userProfile = await profileResponse.json()
    return userProfile

}