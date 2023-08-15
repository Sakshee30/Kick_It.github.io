const express = require("express");
const path = require("path");
//const fs = require("fs");
const app = express();
const port = 8000 | process.env.PORT;

//app.use(express.static('static',Option));
// EXPRESS SPECIFIC STUFF
/*app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())*/

app.use(express.urlencoded({extended: true}));

// app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'view')) 
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// PUG SPECIFIC STUFF

// ENDPOINTS

app.get('/contact', (req, res) => {

    const params = {}
    res.status(200).render('contact.pug', params);
})

app.get('/', (req, res) => {

    const params = {}
    res.status(200).render('index.html', params);
})



// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});