const fs = require('fs');

fs.readFile('planets.txt', 'utf8', (error, contents) => {
    if (error) {
        return console.log(error);
    }
    console.log(contents);
})