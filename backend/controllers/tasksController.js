import Task from '../models/Task.js'

const getTaskByID = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.taskID })
        if (!task) {
            return res.status(404).json({
                error: 'Task not found'
            })
        }
        res.json(task)
    } catch(err) {
        console.error(err)
        res.status(500).json({
            error: 'Server error, try again later'
        })
    }
}

const deleteTask = async (req, res) => {
    try {
        const task = Task.findOne({ _id: req.params.taskID })
        if (!task) {
            return res.status(404).json({
                error: 'Task not found'
            })
        }
        await Task.deleteOne(task)
        res.status(204).json({
            message: 'Task deleted successfully'
        })
    } catch(err) {
        console.error(err)
        res.status(500).json({
            error: 'Server error, try again later'
        })
    }
}

const createTask = async (req, res) => {
    try {
        const newTask = await Task.create(req.body.task)
        res.status(201).json({
            message: 'Task created successfully',
            task: newTask
        })
    } catch(err) {
        console.error(err)
        res.status(500).json({
            error: 'Server error, try again later'
        })
    }
}

export default { getTaskByID, deleteTask, createTask }