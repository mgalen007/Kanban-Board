import apiFetch from './api.ts'

interface Task {
    _id: string
    userID: string
    title: string
    category: "in progress" | "waiting" | "completed"
    description: string
    createdAt: string
    updatedAt: string
    __v: number
}

interface CreateTaskParams {
    category: "in progress" | "waiting" | "completed"
    title: string
    description: string
    userID: string
    sessionID: string
    token: string
}

const endpoint = "/tasks"
const token = ''

export async function getTask(id: string): Promise<Task> {
    try {
        const task = await apiFetch<Task>(`${endpoint}/${id}`, token, "GET")
        return task
    } catch(err) {
        throw err as Error
    }
}

export async function createTask(obj: CreateTaskParams): Promise<Task> {
    try {
        const url = "http://localhost:4000/tasks"
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${obj.token}`
            },
            body: JSON.stringify({
                task: {
                    category: obj.category,
                    title: obj.title,
                    description: obj.description,
                    userID: obj.userID,
                    sessionID: obj.sessionID
                }
            })
        })
        if (!res.ok) throw new Error(`HTTP ERROR: ${res.status}`)
        const data = await res.json()
        return data
    } catch(err) {
        throw err as Error
    }
}