const fs = require('fs');
const path = require('path');

function getTasks() {
    const filePath = path.join(__dirname, 'data.json');
    console.log('File Path:', filePath);

    const data = fs.readFileSync(filePath, 'utf8');

    return JSON.parse(data);
}

module.exports = {
    getTasks
};
