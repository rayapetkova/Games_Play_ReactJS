const baseUrl = 'http://localhost:3030/jsonstore'

export async function createGame(data) {
    await fetch(`${baseUrl}/games`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
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