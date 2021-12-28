const { Router } = require('express');

const router = Router();

router.get('/tasks', async (req, res) => {
    res.send('retrieven a list of tasks')
})

router.get('/tasks/10', (req, res) => {
    res.send('Return only one task');
})

router.post('/tasks', (req, res) => {
    res.send('Creating a new task');
})

router.delete('/tasks', (req, res) => {
    res.send('Deleting a task');
})

router.put('/tasks', (req, res) => {
    res.send('Updating a task');
})

module.exports = router;