const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send({http:'localhost:3000', method:'get'});
});

app.listen(port, () => {
	console.log('server is running at port '+port);
})