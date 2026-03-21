import apiFetch from './api.ts'

interface Session {
    _id: string
    userID: string
    tasks: string[]
    createdAt: Date
    updatedAt: Date
    __v: number
}

const endpoint = "/sessions"
const token = ''

export async function createSession(): Promise<Session> {
    try {
        const newSession = await apiFetch<Session>(endpoint, token, "POST")
        return newSession
    } catch(err) {
        throw err as Error
    }
}

export async function getSession(id: string): Promise<Session> {
    try {
        const session = await apiFetch<Session>(`${endpoint}/${id}`, token, "GET")
        return session
    } catch(err) {
        throw err as Error
    }
}
