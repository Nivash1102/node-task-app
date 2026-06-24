const fs = require('fs');
const path = require('path');

function getTasks() {
    return new Promise((resolve, reject) => {

    const filePath = path.join(__dirname, 'data.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            reject(err);
        } else {
            resolve(JSON.parse(data));
        }
    });
    });
}

module.exports = {
    getTasks
};
