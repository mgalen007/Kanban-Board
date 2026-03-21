import apiFetch from './api.ts'

interface UserInfo {
    username: string
    email: string
}

interface User {
    _id: string
    email: string
    username: string
    passwordHash: string
    sessions: string[]
    tasks: string[]
    createdAt: string
    updatedAt: string
    __v: number
}

const endpoint = '/users'
const token = ''

export async function getUser(id: string): Promise<UserInfo> {
    try {
        const user = await apiFetch<User>(`${endpoint}/${id}`, token, "GET")
        return { username: user.username, email: user.email }
    } catch(err) {
        throw err as Error
    }
}