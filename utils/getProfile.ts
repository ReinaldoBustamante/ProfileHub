export const getProfile = async (username: string) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const profileResponse = await fetch(`${apiUrl}/profile?username=${username}`)
    const userProfile = await profileResponse.json()
    return userProfile

}