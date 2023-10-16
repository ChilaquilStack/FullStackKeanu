type payload = {
    query: string,
    variables: any
}

const imageApi = ({ query, variables }: payload) => {

    const URI = import.meta.env.REACT_APP_API_URL || 'http://localhost:4000'

    return fetch(URI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    })
    .then(response => response.json())
    .then(data => data)
}

export default imageApi