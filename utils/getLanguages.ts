export const getLanguages = async (username: string) => {
    const languagesResponse = await fetch(`http://localhost:3000/api/languages?username=${username}`)
    const userLanguages = await languagesResponse.json()
    return userLanguages
}