const fs = require('fs');
fs.readFile(__dirname + '/3.txt', 'utf8', (err, data) => {
	if (err) return console.log(err.message);
	console.log(data);
})
