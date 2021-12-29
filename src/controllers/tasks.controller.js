const pool = require('../db');

const getAllTasks = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM task');
        res.json(result.rows);
    } catch (error) {
        res.json({error: error.message});
    }
}

const getTask = async (req, res) => {
    const {id} = req.params;

    const result = await pool.query("SELECT * FROM task WHERE id = $1", [id])

    res.json(result.rows[0]);
}

const createTask = async (req, res) => {
    const { title, description } = req.body;

    try {
        const result = await pool.query('INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *', [title, description]);
        res.json(result.rows[0]);
    } catch (error) {
        res.json({error: error.message});
    }
    
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