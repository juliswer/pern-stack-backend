const getAllTasks = async (req, res) => {
    res.send('retrieven a list of tasks')
}

const getTask = (req, res) => {
    res.send('Return only one task')
}

const createTask = (req, res) => {
    const { title, description } = req.body;

    console.log(title, description)
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