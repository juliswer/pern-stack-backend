const getAllTasks = async (req, res) => {
    res.send('retrieven a list of tasks')
}

const getTask = (req, res) => {
    res.send('Return only one task')
}

const createTask = (req, res) => {
    res.send('Creating a new task');
}

const deleteTask = (req, res) => {
    res.send('Deleting a task');
}

const updateTask = (req, res) => {
    res.send('Updating a task');
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}