const fs = require('fs');
// the pipe operator is available on all readable streams,
// and it allows us to pipe the output of a readable stream
// right into the input of a writable stream

// then fix the problem of backpressure
// because it will automatically handle the speed basically
// of the data coming in, and the speed of the data going out.

module.exports = (res) => {
	const readable = fs.createReadStream(`${__dirname}/../data/test-file.txt`);
	readable.pipe(res);
	// readableSource.pipe(writeableDest)
};
