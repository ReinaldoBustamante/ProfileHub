export const getLanguages = async (username: string) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const languagesResponse = await fetch(`${apiUrl}/languages?username=${username}`)
    const userLanguages = await languagesResponse.json()
    return userLanguages
}