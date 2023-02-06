const fs = require('fs');

module.exports = (res) => {
	// most straight-forward
	// simply read the file into a variable
	// then once that's done, send it to the client
	// node takes a lot of time until it loads entirely
	// we're not really interested in loading everything

	// Issue on this method
	// when there are a ton of requests hitting your server.
	// Because the node process
	// will very quickly run out of resources and your app will
	// quit working, everything will crash, and your users will not be happy.
	fs.readFile(`${__dirname}/../data/test-file.txt`, (error, data) => {
		if (error) {
			console.log(error);
		}
		res.end(data);
	});
};
