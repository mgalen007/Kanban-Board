import User from '../models/User.js'

const getUserByID = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userID })
        if (!user) {
            return res.status(404).json({
                error: 'User not found'
            })
        }
        res.json({
            username: user.username,
            email: user.email
        })
    } catch(err) {
        res.status(500).json({
            error: 'Server error, try again later'
        })
    }
}

export default { getUserByID }