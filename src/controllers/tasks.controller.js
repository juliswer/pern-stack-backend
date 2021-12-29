const pool = require('../db');

const getAllTasks = async (req, res) => {
    res.send('retrieven a list of tasks')
}

const getTask = (req, res) => {
    res.send('Return only one task')
}

const createTask = async (req, res) => {
    const { title, description } = req.body;

    const result = await pool.query('INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *', [title, description]);

    console.log(result)
    
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