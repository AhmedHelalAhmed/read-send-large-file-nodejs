// const method1 = require('./methods/method1');
// const method2 = require('./methods/method2');
const method3 = require('./methods/method3');
const server = require('http').createServer();

server.on('request', (req, res) => {
// our application, we need to read a large text file from the file system
// and then send it to the client.

	// method1(res);
	// method2(res);
	method3(res);
});

server.listen(8000, '127.0.0.1', () => {
	console.log('Listening...');
});
