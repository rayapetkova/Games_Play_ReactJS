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

export async function register(data) {
    let response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    let result = response.json()
    return result
}


export async function logout() {
    let response = await fetch(`${baseUrl}/logout`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
    })

    if (response.status === 204) {
        return {}
    }

    let result = response.json()
    return result.json()
}