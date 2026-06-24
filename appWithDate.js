const express = require('express');
const dayjs = require('dayjs');
const taskManager = require('./taskManagerPromise');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const currentDate = dayjs().format('YYYY-MMM-DD');
    res.send(`Hello! Today's date is ${currentDate}`);
});

app.get('/tasks', async(req, res) => {

    try {
        const tasks = await taskManager.getTasks();
        res.json(tasks);
    } catch (err) {
        console.error('Error reading tasks:', err);
        res.status(500).json({ error: 'Failed to read tasks' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 
