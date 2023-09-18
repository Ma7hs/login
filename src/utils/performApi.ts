export class performApi {
    static sendData = async ( path: string, method: string, body: object) => {
        const response = await fetch("http://localhost:3000/" + path, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
        const data = await response.json()
        return data
    }
}