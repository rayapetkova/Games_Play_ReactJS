const baseUrl = 'http://localhost:3030/jsonstore'

export async function createComment(data) {
    let response = await fetch(`${baseUrl}/comments`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    let result = await response.json()
    return result
}

export async function getComments() {
    let response = await fetch('http://localhost:3030/jsonstore/comments')
    let result = await response.json()

    return Object.values(result)
}