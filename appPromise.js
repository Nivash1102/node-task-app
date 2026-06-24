const taskManager = require('./taskManagerPromise');

taskManager.getTasks()    .then(tasks => {
        console.log('Tasks received using Promise:', tasks);
    })  
    .catch(err => {
        console.error('Error reading tasks:', err);
    });