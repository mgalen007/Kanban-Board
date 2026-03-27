/*
Required data: 
    - Tasks with stats
    - Username
    - Stats (total progress, task stats)
*/
import { getUser } from './userService.ts'
import { getTask } from './taskService.ts'
import { getSession } from './sessionService.ts'


export interface GetDataParams {
    userID: string
    sessionID: string
    endTime: Date
    token: string
}

export interface Data {
    username: string
    tasks: TaskWithStat[]
    stats: Stats
}

export interface TaskWithStat {
    title: string
    description: string
    category: "in progress" | "waiting" | "completed"
    progress: number
}

export interface Stats {
    totalProgress: number
    totalTasks: number
    completed: number
    inProgress: number
    waiting: number
}

export async function getData(obj: GetDataParams): Promise<Data> {
    try {
        const user = await getUser(obj.userID)
        const username = user.username

        const session = await getSession(obj.sessionID)
        const tasksWithStats: TaskWithStat[] = await Promise.all(session.tasks.map(async (task) => {
            const { title, description, category, createdAt } = await getTask(task)
            const timeDiff = getTimeDiff(createdAt, new Date())
            const totalTime = getTimeDiff(createdAt, obj.endTime)
            const progress = getProgress(timeDiff, totalTime)
            return { title, description, category, progress }
        }))

        return {
            username,
            tasks: tasksWithStats,
            stats: {
                totalProgress: getTotalProgress(tasksWithStats),
                totalTasks: tasksWithStats.length,
                completed: tasksWithStats.filter(task => task.category == "completed").length,
                inProgress: tasksWithStats.filter(task => task.category == "in progress").length,
                waiting: tasksWithStats.filter(task => task.category == "waiting").length
            }
        }
    } catch(err) {
        throw err as Error
    }
} 

function getTimeDiff(start: Date, end: Date): number {
    const diff = end.getTime() - start.getTime()
    const seconds = Math.floor(diff / 1000)
    const minutes = Math.floor(seconds / 60)
    return minutes
}

function getProgress(timeDiff: number, totalTime: number): number {
    return Math.floor((timeDiff / totalTime) * 100)
}

function getTotalProgress(tasks: TaskWithStat[]): number {
    let total = 0
    tasks.forEach(task => total += task.progress)
    return Math.floor(total / tasks.length)
}