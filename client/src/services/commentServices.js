const baseUrl = 'http://localhost:3030/data'

export async function createComment(data) {
    let headers = {
        'content-type': 'application/json'
    }

    const token = localStorage.getItem('accessToken')
    if (token) {
        headers['X-Authorization'] = token
    }

    let response = await fetch(`${baseUrl}/comments`,{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })

    let result = await response.json()
    return result
}

export async function getComments() {
    let response = await fetch(`${baseUrl}/comments`)
    let result = await response.json()

    return Object.values(result)
}