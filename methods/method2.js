const fs = require('fs');

module.exports = (res) => {

	// Streams
	//  we actually don't really need to read this data from the file into a variable
	// We don't need this variable.
	// instead of reading the data into a variable,
	// and having to store that variable into memory,
	// we will just create a readable stream

	// Then as we receive each chunk of data,
	// we send it to the client as a response
	// which is a writable stream

	// response is a writable stream

	// we read one piece of the file, and as soon as that's available,
	// we send it right to the client

	// The issue in this method
	// the problem is that readable stream, so the one that we're using
	// to read the file from the disk, is much much faster than actually
	// sending the result with the response writable stream
	// over the network. And this will overwhelm the response stream
	//  which cannot handle all this incoming data so fast.
	// And this problem is called backpressure.

	const readable = fs.createReadStream(`${__dirname}/../data/test-file.txt`);
	readable.on('data', chunk => {
		res.write(chunk);
	});
	readable.on('end', () => {
		res.end();
	});
	readable.on('error', err => {
		console.log(err);
		res.statusCode = 500;
		res.end('File not found!');
	});

};
