import Session from '../models/Session.js'
import Task from '../models/Task.js'
import mongoose from 'mongoose'
import Joi from 'joi'
import taskSchema from '../schemas/taskSchema.js'

const getUserSessions = async (req, res) => {
    try {
        const sessions = await Session.find({ userID: req.query.userID })
        if (sessions.length == 0) {
            return res.json({
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
        await Session.create({ userID: req.query.userID })
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
        if (!mongoose.Types.ObjectId.isValid(req.params.sessionID)) {
            return res.status(400).json({
                error: 'Invalid session ID'
            })
        }
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
        if (!req.body || !req.body.task) {
            return res.status(400).json({
                error: `'task' is required`
            })
        }
        await taskSchema.validateAsync(req.body.task)
        req.body.task.userID = req.user.id

        const currentSession = await Session.findOne({ userID: req.user.id })
        req.body.task.sessionID = currentSession._id

        const newTask = await Task.create(req.body.task)
        session.tasks.push(newTask._id)

        await session.save()
        res.status(201).json({
            message: 'Task added to session successfully'
        })
    } catch(err) {
        if (err.isJoi) {
            return res.status(400).json({
                error: err.details[0].message
            })
        }
        console.error(err)
        res.status(500).json({
            error: 'Server error, try again later'
        })
    }
}

const deleteTask = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.sessionID)) {
            return res.status(400).json({
                error: 'Invalid session ID'
            })
        }
        const session = await Session.findOne({ _id: req.params.sessionID })
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
        session.tasks.splice(session.tasks.indexOf(req.params.taskID), 1)
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