import Session from '../models/Session.js'

const getUserSessions = async (req, res) => {
    try {
        const sessions = await Session.find({ userID: req.params.userID })
        if (!sessions) {
            res.json({
                message: 'This user has no sessions'
            })
        }
        res.json(sessions)
    } catch(err) {
        console.error(err)
        res.status(500).json({
            error: 'Server error, try again later'
        })
    }
}

const createSession = async (req, res) => {
    try {
        await Session.create({ userID: req.body.userID })
        res.status(204).json({
            message: 'Session created successfully'
        })
    } catch(err) {
        console.error(err)
        res.status(500).json({
            error: 'Server error, try again later'
        })
    }
}

const getSessionByID = async (req, res) => {
    try {
        const session = await Session.find({ _id: req.params.sessionID })
        if (!session) {
            return res.status(404).json({
                error: 'Session not found'
            })
        }
        res.json(session)
    } catch(err) {
        console.error(err)
        res.status(500).json({
            error: 'Server error, try again later'
        })
    }
}

const addTaskToSession = async (req, res) => {
    try {
        const session = await Session.findOne({ _id: req.params.sessionID })
        if (!session) {
            return res.status(404).json({
                error: 'Session not found'
            })
        }
        session.tasks.push(req.body.task)
        await session.save()
        res.status(204).json({
            message: 'Task added to session successfully'
        })
    } catch(err) {
        console.error(err)
        res.status(500).json({
            error: 'Server error, try again later'
        })
    }
}

const deleteTask = async (req, res) => {
    try {
        const session = await Session.find({ _id: req.params.sessionID })
        if (!session) {
            return res.status(404).json({
                error: 'Session not found'
            })
        }
        const task = session.tasks.find(t => t._id == req.params.taskID)
        if (!task) {
            return res.status(404).json({
                error: 'Task not found in session'
            })
        }
        session.tasks.filter(t => t._id != req.params.sessionID)
        await session.save()
        res.json({
            message: 'Task deleted from session successfully'
        })
    } catch(err) {
        console.error(err)
        res.status(500).json({
            error: 'Server error, try again later'
        })
    }
}

export default {
    getUserSessions,
    createSession,
    getSessionByID,
    addTaskToSession,
    deleteTask
}