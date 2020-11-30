//importing the express module
const express = require('express');

//creating the app
const app = express();

//Now I need to create the router
app.get('/', function(req, res) {
    res.send('Welcome to Atlanta')

});

app.listen(8000);