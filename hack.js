const express = require('express');
const chalk = require('chalk');
const path = require('path');
const app = express();

const port = process.env.PORT || 4000

//making express know we're setting a static directory 
//in other to access the files in it.
app.use(express.static(path.join(__dirname, '/public')));

// Over here I am fetching my bootstrap files and jquery from node_modules
// this is because bootstrap is an external css and can get updated 
// anytime so when i do "npm update " i can get the updated version anytime 
app.use('/css', express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use('/js', express.static(path.join(__dirname, "node_modules/jquery/dist")));
// setting up the view for the app 
app.set('views', './src/views');
// telling express we're using ejs as our templating engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'getting started' })
})
app.listen(port, () => {
    console.log('Running on' + ' ' + chalk.green(port) + " ....")
})