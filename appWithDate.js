const express = require('express');
const dayjs = require('dayjs');
const taskManager = require('./taskManagerPromise');
const app = express();
const port = 5555;

app.get('/', (req, res) => {
    const currentDate = dayjs().format('YYYY-MM-DD');
    res.send(`Hello! Today's date is ${currentDate}`);
});

app.get('/tasks', async(req, res) => {

    try {
        const tasks = await taskManager.getTasks();
        res.json(tasks);
    } catch (err) {
        res.status(500).send('Error reading tasks: ' + err.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 
