const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();

//#region routers
const messageRoute = require('../routers/messages.router');
//#endregion

const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

app.use('/messages', messageRoute);


module.exports = app;

