const express = require('express');
const app = express();
const port = 8000;

// Redirect all to index.js inside routes directory
app.use('/', require('./routes'));

// Setting view engine as ejs
app.set('view engine', 'ejs');

// Setting path for views
app.set('views', './views');


// to use static files, present in assets directory
app.use(express.static('assets'));

// Setting express to listen to port 8000
app.listen(port, function(err){
    if(err){
        console.log("Error occured while trying to run server on port : ", port);
    }

    console.log("Express server is running on port: ",port);
});