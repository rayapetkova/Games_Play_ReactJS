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