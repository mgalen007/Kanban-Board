
const url = "http://localhost:4000"

async function apiFetch<T>(endpoint: string, token: string, method: "GET" | "POST"): Promise<T> {
    try {
        const res = await fetch(url + endpoint, {
            method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        if (!res.ok) throw new Error(`HTTP ERROR: ${res.status}`)
        const data = await res.json()
        return data
    } catch(err) {
        throw err as Error
    }
}

export default apiFetch