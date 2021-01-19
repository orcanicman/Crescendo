const app = require('express')();
const http = require('http').createServer(app);

app.get('/', (req, res) =>
{
	res.sendFile(__dirname, '../public/index.html');
});

http.listen(3000, () =>
{
	console.log('listening on *:3000');
});