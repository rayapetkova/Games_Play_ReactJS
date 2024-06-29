const baseUrl = 'http://localhost:3030/users'

export async function login(data) {
    let response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    let result = response.json()
    return result
}
