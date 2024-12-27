export const getLimit = async () => {
    const rateResponse = await fetch("https://api.github.com/rate_limit")
    const { rate } = await rateResponse.json()
    return rate
}