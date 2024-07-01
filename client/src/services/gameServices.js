const baseUrl = 'http://localhost:3030/data'

export async function createGame(data) {
    let headers = {
        'content-type': 'application/json'
    }

    const token = localStorage.getItem('accessToken')
    if (token) {
        headers['X-Authorization'] = token
    }

    await fetch(`${baseUrl}/games`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })


}

export async function getGames() {
    const response = await fetch(`${baseUrl}/games`)
    const result = response.json()

    return result
}

export async function getGame(gameId) {
    const response = await fetch(`${baseUrl}/games/${gameId}`)
    const result = response.json()

    return result
}