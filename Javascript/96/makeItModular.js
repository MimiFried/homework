const myModule = require('./myModule');

myModule(process.argv[2], process.argv[3], function (err, files) {
        if (err) {
            return console.error('ERROR', err);
        }
        files.forEach(file => console.log(file));
    });